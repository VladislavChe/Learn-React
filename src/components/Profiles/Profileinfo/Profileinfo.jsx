import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://cf.bstatic.com/data/xphoto/1182x887/202/20233869.jpg?size=S"
          alt="foto"
        />
      </div>
      <div className={s.profileinfo__description}>ava + description</div>
    </div>
  );
};

export default Profileinfo;
