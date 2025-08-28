import * as React from 'react';
import {Link} from 'react-router-dom';
import Row from '../Simple/Row';
import Title from '../Simple/Title';
import {getAll, deleteById, IProject} from '../../api/projects';

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<Array<IProject>>([]);

  React.useEffect(() => {
    getAll()
      .then(({data}) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Title>Projects</Title>
      <Link to='/admin/project/new'>New</Link>
      {projects.map((project, i) => (
        <Row
          key={i}
          editUrl={`/admin/projects/${project.id}`}
          handleDelete={async () => {
            await deleteById(project.id);
            setProjects(projects.filter(
              ({id}) => project.id !== id
            ));
          }}
          text={project.title} />
      ))}
    </>
  );
};

export default Projects;
