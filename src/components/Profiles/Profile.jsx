import React from 'react';
import MyPosts from './myPosts/MyPosts';
import MyPost from './myPosts/Post/MyPost';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
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
    <div className={s.profile__content}>
      <Profileinfo />

      <MyPosts posts={postsElements} />
    </div>
  );
};

export default Profile;
