import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from 'admin/components/Partials/Title';
import ProjectForm from 'admin/components/Forms/ProjectForm';
import Project from '@/components/Containers/Project';

import {
  fetchProjectById,
  updateProject,
} from 'admin/store/actions/projectsActions';
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
    this
      .props
      .fetchProjectById(this.props.match.params.id)
      .then((res) => {
        this.setState({
          loaded: true,
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
