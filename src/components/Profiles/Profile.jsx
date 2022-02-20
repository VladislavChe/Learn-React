import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div className={s.profile__content}>
      <Profileinfo profile={props.profile} />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
