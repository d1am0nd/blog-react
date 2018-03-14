import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchProjects} from 'store/actions/projectsActions';
import {Meta} from 'meta/meta';

import H1 from 'components/Simple/H1';
import Project from 'components/Containers/Project';

class Projects extends React.Component {
  static fetchData(store) {
    return store.dispatch(fetchProjects());
  }

  static title() {
    return 'My projects';
  }

  static summary() {
    return 'My side projects.';
  }

  componentDidMount() {
    if (this.props.dataLoaded) {
      this.props.fetchProjects();

      Meta.setTitle(Projects.title());
      Meta.setDescription(Projects.summary());
    }
  }

  render() {
    return (
      <div>
        <H1>Projects</H1>
        {this.props.projects.map((p, i) => {
          return (
            <Project key={`${p.title}-${i}`} project={p}/>
          );
        })}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  fetchProjects: PropTypes.func.isRequired,
};

const mapStoreToProps = (store) => {
  return {
    projects: store.projects.projects,
    dataLoaded: store.misc.dataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(radium(Projects));
