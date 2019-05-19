import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
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

interface IParams {
  id: string;
};

const Projects: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  match,
}) => {
  const id = parseInt(match.params.id);
  const [project, setProject] = React.useState<IProjectEdit>();

  React.useEffect(() => {
    findById(id)
      .then(({data}) => setProject(data))
      .catch((err) => console.log(err));
  }, []);

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

export default withRouter(Projects);
