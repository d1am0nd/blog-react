import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import ProjectForm from '../../Forms/ProjectForm';
import Render from '../../Renders/Project';

import {
  fetchProjectById,
  updateProject,
} from '../../../store/actions/projectsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        published_at: {},
      },
    };
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchProjectById(this.props.match.params.id))
      .then(res => {
        this.setState({
          project: res,
        });
      })
      .catch(err => {
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
    this.props.dispatch(updateProject(project));
  }

  renderForm() {
    if (typeof this.state.project.id !== 'undefined') {
      return (
        <ProjectForm
          projectChanged={project => this.projectChanged(project)}
          handleSubmit={(e, project) => this.handleSubmit(e, project)}
          project={this.props.project}/>
      );
    }
    return '';
  }

  render() {
    return (
      <div>
        <Title text={this.props.project.title}/>
        <div style={leftStyle()}>
          {this.renderForm()}
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
})(radium(Edit));
