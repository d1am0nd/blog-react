import React from 'react';
import radium from 'radium';

import H1 from '@/components/Simple/H1';
import Project from '@/components/Containers/Project';
import ProjectForm from 'admin/components/Forms/ProjectForm';

import {newProject} from 'admin/api/projects';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        position: '',
        title: '',
        url: '',
        source: '',
        img_src: '',
        description: '',
      },
    };
  }

  projectChanged(project) {
    this.setState({
      project: project,
    });
  }

  handleSubmit(e, project) {
    e.preventDefault();
    newProject(project)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <H1>New project</H1>
        <div style={leftStyle()}>
          <ProjectForm
            project={this.state.project}
            projectChanged={(project) => this.projectChanged(project)}
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

export default radium(New);
