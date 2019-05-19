import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
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

interface IParams {
  slug: string;
};

const PostEdit: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  match,
}) => {
  const [post, setPost] = React.useState<IPost>();

  React.useEffect(() => {
    findBySlug(match.params.slug)
      .then(({data}) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

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

export default withRouter(PostEdit);
