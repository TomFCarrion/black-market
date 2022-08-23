import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import Logo from '../Common/Logo';
import Input from '../Common/Input';
import Button from '../Common/Button';
import Link from '../Common/Link';
import './LoginForm.css';

import { loginValidator } from './loginFormValidator';

export interface LoginFormProps {
  customClass?: string;
}
export interface LoginFormFields {
  email: string;
  password: string;
}

const LoginForm = ({ customClass }: LoginFormProps) => {
  const { login, loading, error } = useAuth(); //loading will be used when the spinner gets implemented
  const navigate = useNavigate();
  const initialValues: LoginFormFields = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginFormFields) => login(values.email, values.password);

  return (
    <div className={`${customClass} loginForm-container`}>
      <div className="loginAuth-container">
        <Logo customClass="logo" size="l" />
        <Formik
          initialValues={initialValues}
          onSubmit={(values: LoginFormFields) => handleSubmit(values)}
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
              {error && <label className="unmatch-error"> Your email or password are incorrect.</label>}
              <label className="login-form-forgot-password">
                <Link text="I forgot my password." redirectTo="/" />
              </label>
            </form>
          )}
        </Formik>
      </div>
      <div className="signup-redirect-container">
        <label>Don't have an account?</label>
        <Button onClick={() => navigate('singup')} title="Sign up" variant={'outline'} />
      </div>
    </div>
  );
};

export default LoginForm;
