import * as React from 'react';
import H1 from '../../../ts/components/Simple/H1';
import Post from '../../../ts/components/Simple/Post';
import PostForm from '../Simple/PostForm';
import {create, IPostCreateData, IPost} from '../../api/posts';
import {slugify} from '../../misc/helpers';

const leftStyle = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const rightStyle = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const PostCreate: React.FC = () => {
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
          ...post,
          id: 1337,
        } as IPost} />
      </div>
      <div style={{clear: 'both'}} />
    </>
  );
};

export default PostCreate;
