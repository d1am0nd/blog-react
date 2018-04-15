import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import H1 from '@/components/Simple/H1';
import ProjectForm from 'admin/components/Forms/ProjectForm';
import Project from '@/components/Containers/Project';

import {newProject} from 'admin/store/actions/projectsActions';
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
    this.props.newProject(project);
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

New.propTypes = {
  project: PropTypes.object,
  newProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    project: state.projects.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newProject: (proj) => dispatch(newProject(proj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(New));
