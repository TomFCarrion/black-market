import React from 'react';
import { Formik } from 'formik';
import './LoginForm.css';
import Logo from '../Common/Logo';
import Input from '../Common/Input';
import Button from '../Common/Button';
import Link from '../Common/Link';

import { loginValidator } from './loginFormValidator';

export interface LoginFormProps {
  customClass?: string;
  onSubmit: (values: LoginFormFields) => void;
}
export interface LoginFormFields {
  email: string;
  password: string;
}

const LoginForm = ({ onSubmit, customClass }: LoginFormProps) => {
  const initialValues: LoginFormFields = {
    email: '',
    password: '',
  };

  return (
    <div className={`${customClass} loginForm-container`}>
      <div className="loginAuth-container">
        <Logo customClass="logo" size="l" />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidator}
          validateOnBlur={true}
          validateOnChange={false}
          validateOnMount={false}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit} className="form">
              <Input
                name="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                placeholder="Type your email"
                label="Email"
                className="login-form-input"
              />
              <Input
                name="password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
                type="password"
                placeholder="Type your password"
                label="Password"
                className="login-form-input"
              />
              <Button onClick={handleSubmit} title="Log in" variant={'primary'} />
              <label className="login-form-forgot-password">
                <Link text="I forgot my password." redirectTo="/" />
              </label>
            </form>
          )}
        </Formik>
      </div>
      <div className="signup-redirect-container">
        <label>Don't have an account?</label>
        <Button onClick={() => console.log('redirect')} title="Sign up" variant={'outline'} />
      </div>
    </div>
  );
};

export default LoginForm;
