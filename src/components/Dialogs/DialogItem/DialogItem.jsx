import React from 'react'; // link react
import { NavLink } from 'react-router-dom'; // link ruter
import s from './../Dialogs.module.css'; // link css

// Функция создания диалогов
const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialogs__dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
