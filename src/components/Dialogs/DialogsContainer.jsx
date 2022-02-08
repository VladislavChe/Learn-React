import React from 'react';
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let messageChange = (text) => {
          store.dispatch(updateMessageActionCreator(text));
        };
        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            addMessage={addMessage}
            messageChange={messageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
