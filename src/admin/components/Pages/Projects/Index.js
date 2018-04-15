import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import Row from 'admin/components/Partials/Row';
import Title from 'admin/components/Partials/Title';
import Search from 'admin/components/Partials/Search';

import {getAll, deleteProject} from 'admin/api/projects';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      projects: [],
    };
  }

  componentDidMount() {
    getAll()
      .then((res) => {
        this.setState({
          projects: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(project) {
    if (confirm(`Delete ${project.title}?`)) {
      deleteProject(project.id)
        .then((res) => {
          this.setState({
            projects: this
              .state
              .projects
              .filter((p) => p.id !== project.id),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const {search, projects} = this.state;
    return (
      <div>
        <Title text={`Projects`}/>
        <Link to={`/admin/project/new`}>New</Link>
        <Search handleChange={(e) => this.handleSearchChange(e)}/>
        {projects
          .filter((p) => p.title.toLowerCase().includes(search))
          .map((p) => (
            <Row
              key={p.id}
              editUrl={`/admin/projects/${p.id}`}
              handleDelete={(e) => this.handleDelete(p)}
              text={p.title}/>
          ))}
      </div>
    );
  }
}

export default radium(Index);
