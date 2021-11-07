import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <MyPost message={post.message} likeCount={post.likeCount} />
  ));

  return (
    <div className={s.myposts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.myposts__posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
