import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <MyPost message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  let newPostElemnt = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChage = () => {
    let text = newPostElemnt.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.myposts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChage} ref={newPostElemnt} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.myposts__posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
