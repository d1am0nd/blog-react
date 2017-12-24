import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Row from '../../Partials/Row';
import Title from '../../Partials/Title';
import Search from '../../Partials/Search';

import {
  fetchProjects,
  deleteProject,
} from '../../../store/actions/projectsActions';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(project) {
    this.props.dispatch(deleteProject(project.id));
  }

  renderProjects() {
    return this
      .props
      .projects
      .filter(project => {
        return project
          .title
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      })
      .map((project, i) => {
        return <Row
          key={`row-${i}`}
          editUrl={`/admin/projects/${project.id}`}
          handleDelete={e => this.handleDelete(project)}
          text={project.title}/>;
      });
  }

  render() {
    return (
      <div>
        <Title text={`Projects`}/>
        <Link to={`/admin/project/new`}>New</Link>
        <Search handleChange={e => this.handleSearchChange(e)}/>
        {this.renderProjects()}
      </div>
    );
  }
}

export default connect(store => {
  return {
    projects: store.projects.projects,
  };
})(radium(Index));
