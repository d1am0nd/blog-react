import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getProjects} from '@/store/selectors/projects';

import H1 from '@/components/Simple/H1';
import Project from '@/components/Containers/Project';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <H1>Projects</H1>
        {this.props.projects.map((p, i) => (
          <Project key={i} project={p}/>
        ))}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

const mapStoreToProps = (store) => {
  return {
    projects: getProjects(store),
  };
};

export default connect(
  mapStoreToProps,
)(radium(Projects));
