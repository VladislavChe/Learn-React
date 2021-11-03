import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'HI, how are you?', likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 11 },
    { id: 2, message: 'Yo', likeCount: 13 },
    { id: 2, message: 'Blala', likeCount: 15 },
  ];

  let postsElements = posts.map((post) => (
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
