import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../utils/validators/validators';
import { Input } from './../common/formsControls/formsControls';

let maxLength20 = maxLengthCreator(20);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength20]}
          placeholder={'Login'}
          name={'login'}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLength20]}
          placeholder={'Password'}
          name={'password'}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLength20]}
          type={'checkbox'}
          name={'rememberMe'}
          component={Input}
        />{' '}
        remember Me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'Login', // Уникальное имя формы
  fields: ['firstName', 'lastName', 'email'], // поля в вашей форме
})(LoginForm);

export default Login;
