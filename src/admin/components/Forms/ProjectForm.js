import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import SmallText from '../Partials/Form/SmallText';
import TextArea from '../Partials/Form/TextArea';
import Submit from '../Partials/Form/Submit';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project,
    };
  }

  handleChange(key, val) {
    const project = this.state.project;
    project[key] = val;
    this.setState({
      project: project,
    });
    this.props.projectChanged(project);
  }

  render() {
    const {project} = this.state;
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, project)}>
        <SmallText
          inputProps={{
            value: project.position,
            type: 'number',
          }}
          handleChange={
            (e) => this.handleChange('position', parseInt(e.target.value))
          }
          title="Position"/>
        <SmallText
          inputProps={{
            value: project.title,
          }}
          handleChange={(e) => this.handleChange('title', e.target.value)}
          title="Title"/>
        <SmallText
          inputProps={{
            value: project.url,
          }}
          handleChange={(e) => this.handleChange('url', e.target.value)}
          title="Url"/>
        <SmallText
          inputProps={{
            value: project.source,
          }}
          handleChange={(e) => this.handleChange('source', e.target.value)}
          title="Source code"/>
        <SmallText
          inputProps={{
            value: project.img_src,
          }}
          handleChange={(e) => this.handleChange('img_src', e.target.value)}
          title="Image source"/>
        <TextArea
          inputProps={{
            value: project.description,
            rows: 5,
          }}
          handleChange={(e) => this.handleChange('description', e.target.value)}
          title="Description"/>
        <Submit text="Submit"/>
      </form>
    );
  }
}

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  projectChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default radium(ProjectForm);
