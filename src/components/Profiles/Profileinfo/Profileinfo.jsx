import React from 'react';
import Preloader from '../../common/preloader/Plreloader';
import s from './Profileinfo.module.css';

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://cf.bstatic.com/data/xphoto/1182x887/202/20233869.jpg?size=S"
          alt="foto"
        />
      </div>
      <div className={s.profileinfo__description}>
        <img alt="avatar" src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  );
};

export default Profileinfo;
