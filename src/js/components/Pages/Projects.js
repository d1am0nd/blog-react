import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import {fetchProjects} from '../../store/actions/projectsActions';

import Project from '../Partials/Simple/Project';

class Projects extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    return (
      <div>
        {this.props.projects.map((p, i) => {
          return (
            <Project key={`${p.title}-${i}`} project={p}/>
          );
        })}
      </div>
    );
  }
}
export default connect(store => {
  return {
    projects: store.projects.projects,
  };
})(radium(Projects));
