import * as React from 'react';
import SmallText from './SmallText';
import TextArea from './TextArea';
import Submit from './Submit';
import {IPostCreateData} from '../../api/posts';

interface IProps {
  post: IPostCreateData;
  handleChange: (post: IPostCreateData) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const PostForm: React.FunctionComponent<IProps> = ({
  post,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <SmallText
      value={post.title}
      name='title'
      handleChange={({currentTarget}) => (
        handleChange({...post, title: currentTarget.value})
      )}
      title="Title"/>
    {post.slug}
    <TextArea
      value={post.summary}
      name='summary'
      label='Summary'
      handleChange={({currentTarget}) => (
        handleChange({...post, summary: currentTarget.value})
      )}
      title="Summary"/>
    <TextArea
      value={post.content}
      name='content'
      label='Content'
      rows={20}
      handleChange={({currentTarget}) => (
        handleChange({...post, content: currentTarget.value})
      )}
      title="Content"/>
    <div>
      <label>Published at</label>
      <input
        placeholder="YYYY-MM-DD"
        type="text"
        value={post.published_at}
        onChange={({currentTarget}) => (
          handleChange({...post, published_at: currentTarget.value})
        )} />
    </div>
    <Submit>Submit</Submit>
  </form>
);

export default PostForm;
