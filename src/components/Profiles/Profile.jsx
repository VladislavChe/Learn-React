import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
  return (
    <div className={s.profile__content}>
      <Profileinfo />

      <MyPosts />
    </div>
  );
};

export default Profile;
