import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Title from 'admin/components/Partials/Title';
import ProjectForm from 'admin/components/Forms/ProjectForm';
import Project from '@/components/Containers/Project';

import {findById, update} from 'admin/api/projects';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      project: {},
    };
  }

  componentDidMount() {
    findById(this.props.match.params.id)
      .then((res) => {
        this.setState({
          loaded: true,
          project: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  projectChanged(project) {
    this.setState({
      project: project,
    });
  }

  handleSubmit(e, project) {
    e.preventDefault();
    update(project)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {project, loaded} = this.state;
    return (
      <div>
        <Title text={project.title}/>
        <div style={leftStyle()}>
          {loaded ?
            <ProjectForm
              projectChanged={(project) => this.projectChanged(project)}
              handleSubmit={(e, project) => this.handleSubmit(e, project)}
              project={project}/> : null}
        </div>
        <div style={rightStyle()}>
          <Project project={project}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

Edit.propTypes = {
  match: PropTypes.object.isRequired,
};

export default radium(Edit);
