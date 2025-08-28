import * as React from 'react';
import Title from '../Simple/Title';
import {Link} from 'react-router-dom';
import Row from '../Simple/Row';
import {getMine, deletePost, IPost} from '../../api/posts';

const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState<Array<IPost>>([]);

  React.useEffect(() => {
    getMine()
      .then(({data}) => setPosts(data));
  }, []);

  return (
    <>
      <Title>Posts</Title>
      <Link to={`/admin/post/new`}>New</Link>
      {posts.map(({id, title, slug}) => (
        <Row
          key={id}
          editUrl={`/admin/posts/${slug}`}
          handleDelete={async () => {
            await deletePost(id);
            setPosts((posts) => posts.filter(
              (post) => post.id !== id
            ));
          }}
          text={title} />
      ))}
    </>
  );
};

export default Posts;
