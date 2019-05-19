import * as React from 'react';
import SmallText from './SmallText';
import TextArea from './TextArea';
import Submit from './Submit';
import {IProjectEdit} from '../../api/projects';

interface IProps {
  project: IProjectEdit;
  handleChange: (project: IProjectEdit) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const ProjectForm: React.FunctionComponent<IProps> = ({
  project,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <SmallText
      value={project.position}
      name='position'
      type='number'
      handleChange={({currentTarget}) => (
        handleChange({
          ...project,
          position: parseInt(currentTarget.value),
        })
      )}
      label="Position"/>
    <SmallText
      value={project.title}
      name='title'
      handleChange={({currentTarget}) => (
        handleChange({...project, title: currentTarget.value})
      )}
      label="Title"/>
    <SmallText
      value={project.url}
      name='url'
      handleChange={({currentTarget}) => (
        handleChange({...project, url: currentTarget.value})
      )}
      label="Url"/>
    <SmallText
      value={project.source}
      name='source'
      handleChange={({currentTarget}) => (
        handleChange({...project, source: currentTarget.value})
      )}
      label="Source code"/>
    <SmallText
      value={project.img_src}
      name='img_src'
      handleChange={({currentTarget}) => (
        handleChange({...project, img_src: currentTarget.value})
      )}
      label="Image source"/>
    <TextArea
      value={project.description}
      name='description'
      label='Description'
      handleChange={({currentTarget}) => (
        handleChange({...project, description: currentTarget.value})
      )}
      title="Description"/>
    <Submit>Submit</Submit>
  </form>
);

export default ProjectForm;
