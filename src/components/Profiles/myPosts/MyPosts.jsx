import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <MyPost message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  let onAddPost = (values) => props.addPost(values.newPost);

  return (
    <div className={s.myposts}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={s.myposts__posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Enter your post" component={'textarea'} name={'newPost'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);

export default MyPosts;
