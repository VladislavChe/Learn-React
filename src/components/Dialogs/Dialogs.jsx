import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../utils/validators/validators';
import { Textarea } from './../common/formsControls/formsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

let maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addNewMessage = (values) => props.addMessage(values.newMessage);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLength50]}
        placeholder="Enter your message"
        component={Textarea}
        name={'newMessage'}
      />
      <button>add dialog</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogsAddMessageForm',
})(AddMessageForm);

export default Dialogs;
