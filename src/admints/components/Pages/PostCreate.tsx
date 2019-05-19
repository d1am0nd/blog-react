import * as React from 'react';
import H1 from '../../../ts/components/Simple/H1';
import Post from '../../../ts/components/Simple/Post';
import PostForm from '../Simple/PostForm';
import {create, IPostCreateData} from '../../api/posts';
import {slugify} from '../../misc/helpers';

const leftStyle = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const rightStyle = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const PostCreate: React.FunctionComponent = () => {
  const [post, setPost] = React.useState<IPostCreateData>({
    title: '',
    slug: '',
    summary: '',
    content: '',
    published_at: '',
  });

  return (
    <>
      <H1>{post.title}</H1>
      <div style={leftStyle()}>
        <PostForm
          post={post}
          handleChange={(post) => setPost({
            ...post,
            slug: slugify(post.title),
          })}
          handleSubmit={async (e) => {
            e.preventDefault();
            await create(post);
            alert('Created');
          }}/>
      </div>
      <div style={rightStyle()}>
        <Post post={{
          id: 1337,
          ...post,
        }} />
      </div>
      <div style={{clear: 'both'}} />
    </>
  );
};

export default PostCreate;
