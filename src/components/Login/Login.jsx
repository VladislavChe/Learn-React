import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
        <Field placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember Me
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
