import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://cf.bstatic.com/data/xphoto/1182x887/202/20233869.jpg?size=S"
          alt="foto"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
