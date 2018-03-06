import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import {fetchProjects} from 'store/actions/projectsActions';
import {Meta} from 'meta/meta';

import Project from 'components/Partials/Simple/Project';

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
      this.props.dispatch(fetchProjects());

      Meta.setTitle(Projects.title());
      Meta.setDescription(Projects.summary());
    }
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
    dataLoaded: store.misc.dataLoaded,
  };
})(radium(Projects));
