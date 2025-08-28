import * as React from 'react';
import {useParams} from 'react-router-dom';
import Title from '../Simple/Title';
import Project from '../../../ts/components/Simple/Project';
import ProjectForm from '../Simple/ProjectForm';
import {findById, update, IProjectEdit} from '../../api/projects';

const left = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const right = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const Projects: React.FC = () => {
  const {id: idParam} = useParams<{id: string}>();
  const id = idParam ? parseInt(idParam) : 0;
  const [project, setProject] = React.useState<IProjectEdit>();

  React.useEffect(() => {
    if (!id) return;
    findById(id)
      .then(({data}) => setProject(data))
      .catch((err) => console.log(err));
  }, [id]);

  return !project ? <>loading</> : (
    <>
      <Title>New project</Title>
      <div style={left()}>
        <ProjectForm
          project={project}
          handleChange={setProject}
          handleSubmit={async (e) => {
            e.preventDefault();
            await update(id, project);
            alert('Updated');
          }} />
      </div>
      <div style={right()}>
        <Project project={{id: 1337, ...project}}/>
      </div>
      <div style={{'clear': 'both'}} />
    </>
  );
};

export default Projects;
