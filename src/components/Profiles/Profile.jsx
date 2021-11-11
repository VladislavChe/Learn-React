import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div className={s.profile__content}>
      <Profileinfo />

      <MyPosts posts={props.profilePage.posts} />
    </div>
  );
};

export default Profile;
