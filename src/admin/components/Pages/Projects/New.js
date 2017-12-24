import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import ProjectForm from '../../Forms/ProjectForm';
import Render from '../../Renders/Project';

import {newProject} from '../../../store/actions/projectsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {},
    };
  }

  projectChanged(project) {
    this.setState({
      project: project,
    });
  }

  handleSubmit(e, project) {
    e.preventDefault();
    this.props.dispatch(newProject(project));
  }

  render() {
    return (
      <div>
        <Title text={`New project`}/>
        <div style={leftStyle()}>
          <ProjectForm
            projectChanged={project => this.projectChanged(project)}
            handleSubmit={(e, project) => this.handleSubmit(e, project)}/>
        </div>
        <div style={rightStyle()}>
          <Render project={this.state.project}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    project: store.projects.project,
  };
})(radium(New));
