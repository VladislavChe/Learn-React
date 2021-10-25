import React from 'react';
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
      <div>My posts</div>
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
  );
};

export default Profile;
