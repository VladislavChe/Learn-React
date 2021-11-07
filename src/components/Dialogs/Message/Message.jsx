import React from 'react'; // link react
import s from './../Dialogs.module.css'; // link css

// Функция создания сообщений
const Message = (props) => {
  return <div className={s.dialogs__message}>{props.message}</div>;
};

export default Message;
