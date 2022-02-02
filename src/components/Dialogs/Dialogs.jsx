import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../state/state';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newDialogElement.current.value;
    props.dispatch(updateMessageActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>{messagesElements}</div>
      <div>
        <textarea
          ref={newDialogElement}
          onChange={onMessageChange}
          value={props.newMessage}
        />
        <button onClick={addMessage}>add dialog</button>
      </div>
    </div>
  );
};

export default Dialogs;
