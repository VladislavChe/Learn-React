import React from 'react';
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let messageChange = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  };

  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      addMessage={addMessage}
      messageChange={messageChange}
    />
  );
};

export default DialogsContainer;
