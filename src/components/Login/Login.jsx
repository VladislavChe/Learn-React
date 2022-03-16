import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from './../../utils/validators/validators';
import { Input } from './../common/formsControls/formsControls';

let maxLength20 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength20]}
          placeholder={'Email'}
          name={'email'}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLength20]}
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          component={Input}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember Me
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

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
