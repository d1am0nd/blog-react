import * as React from 'react';
import {useParams} from 'react-router-dom';
import H1 from '../../../ts/components/Simple/H1';
import Post from '../../../ts/components/Simple/Post';
import PostForm from '../Simple/PostForm';
import {findBySlug, update, IPost} from '../../api/posts';
import {slugify} from '../../misc/helpers';

const leftStyle = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const rightStyle = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const PostEdit: React.FC = () => {
  const {slug} = useParams<{slug: string}>();
  const [post, setPost] = React.useState<IPost>();

  React.useEffect(() => {
    if (!slug) return;
    findBySlug(slug)
      .then(({data}) => setPost(data))
      .catch((err) => console.log(err));
  }, [slug]);

  return !post ? <>loading</> : (
    <>
      <H1>{post.title}</H1>
      <div style={leftStyle()}>
        <PostForm
          post={post}
          handleChange={(changedPost) => setPost({
            id: post.id,
            ...changedPost,
            slug: slugify(changedPost.title),
          })}
          handleSubmit={async (e) => {
            e.preventDefault();
            await update(post);
            alert('Updated');
          }}/>
      </div>
      <div style={rightStyle()}>
        <Post post={post} />
      </div>
      <div style={{clear: 'both'}} />
    </>
  );
};

export default PostEdit;
