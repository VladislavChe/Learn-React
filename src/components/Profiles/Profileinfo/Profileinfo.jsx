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
        <img alt="avatar" src={props.profile.photos.small} />
        <div className={s.profileinfo__descriptionWrapp}>
          <div>
            <span>Name:</span> {props.profile.fullName}
          </div>
          <div>
            <span>status:</span> {props.profile.aboutMe}
          </div>
          <div>
            <span>working:</span> {props.profile.lookingForAJob === true ? 'не работаю' : 'работаю'}
          </div>
          <div>
            <span>VK:</span> <a href="https://www.vk.com/">{props.profile.contacts.vk}</a>
          </div>
          <div>
            <span>instagram:</span>{' '}
            <a href="https://www.instagram.com/">{props.profile.contacts.instagram}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
