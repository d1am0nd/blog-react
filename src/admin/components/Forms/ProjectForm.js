import React from 'react';
import radium from 'radium';

import SmallText from '../Partials/Form/SmallText';
import TextArea from '../Partials/Form/TextArea';
import Submit from '../Partials/Form/Submit';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    let project = {};
    if (props.project) {
      Object.assign(project, props.project);
    }

    this.state = {
      project: project,
    };
  }

  handleChange(key, val) {
    const project = this.state.project;
    project[key] = val;
    this.setState({
      project: project,
    });
    if (this.props.projectChanged) {
      this.props.projectChanged(project);
    }
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.project)}>
        <SmallText
          value={this.state.project.position}
          handleChange={e => this.handleChange('position', e.target.value)}
          title={`Position`}/>
        <SmallText
          value={this.state.project.title}
          handleChange={e => this.handleChange('title', e.target.value)}
          title={`Title`}/>
        <SmallText
          value={this.state.project.url}
          handleChange={e => this.handleChange('url', e.target.value)}
          title={`Url`}/>
        <SmallText
          value={this.state.project.source}
          handleChange={e => this.handleChange('source', e.target.value)}
          title={`Source code`}/>
        <SmallText
          value={this.state.project.img_src}
          handleChange={e => this.handleChange('img_src', e.target.value)}
          title={`Image source`}/>
        <TextArea
          value={this.state.project.description}
          rows={5}
          handleChange={e => this.handleChange('description', e.target.value)}
          title={`Description`}/>
        <Submit text={`Submit`}/>
      </form>
    );
  }
}

export default radium(ProjectForm);
