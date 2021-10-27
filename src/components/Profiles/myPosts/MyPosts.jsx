import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div>New post</div>
      <div className={s.posts}>
        <MyPost message="Hi, how are you?" likeCounte="15" />
        <MyPost message="It's my first post" likeCounte="20" />
      </div>
    </div>
  );
};

export default MyPosts;
