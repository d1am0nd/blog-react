import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import H1 from 'components/Simple/H1';
import ProjectForm from '../../Forms/ProjectForm';
import Project from 'components/Containers/Project';

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
        <H1>{`New project`}</H1>
        <div style={leftStyle()}>
          <ProjectForm
            projectChanged={project => this.projectChanged(project)}
            handleSubmit={(e, project) => this.handleSubmit(e, project)}/>
        </div>
        <div style={rightStyle()}>
          <Project project={this.state.project}/>
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
