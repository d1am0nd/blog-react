import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from '../../Partials/Title';
import ProjectForm from '../../Forms/ProjectForm';
import Project from '@/components/Containers/Project';

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
      .fetchProjectById(this.props.match.params.id)
      .then((res) => {
        this.setState({
          project: res,
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
    this.props.updateProject(project);
  }

  renderForm() {
    if (typeof this.state.project.id !== 'undefined') {
      return (
        <ProjectForm
          projectChanged={(project) => this.projectChanged(project)}
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
          <Project project={this.state.project}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

Edit.propTypes = {
  project: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchProjectById: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    project: state.projects.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectById: (id) => dispatch(fetchProjectById(id)),
    updateProject: (project) => dispatch(updateProject(project)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Edit));
