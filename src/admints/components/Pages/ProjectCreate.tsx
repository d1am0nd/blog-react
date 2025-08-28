import * as React from 'react';
import Title from '../Simple/Title';
import Project from '../../../ts/components/Simple/Project';
import ProjectForm from '../Simple/ProjectForm';
import {create, IProjectEdit} from '../../api/projects';

const left = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const right = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const ProjectCreate: React.FC = () => {
  const [project, setProject] = React.useState<IProjectEdit>({
    position: 0,
    title: '',
    url: '',
    source: '',
    img_src: '',
    description: '',
  });

  return (
    <>
      <Title>New project</Title>
      <div style={left()}>
        <ProjectForm
          project={project}
          handleChange={setProject}
          handleSubmit={async (e) => {
            e.preventDefault();
            await create(project);
            alert('Created');
          }} />
      </div>
      <div style={right()}>
        <Project project={{id: 1337, ...project}}/>
      </div>
      <div style={{'clear': 'both'}} />
    </>
  );
};

export default ProjectCreate;
