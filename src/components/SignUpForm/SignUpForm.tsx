import React from 'react';
import { Formik } from 'formik';
import './signUpForm.css';
import Logo from '../Common/Logo';
import Input from '../Common/Input';
import Button from '../Common/Button';
import Link from '../Common/Link';

import { signUpValidator } from './SignUpFormValidator';

export interface SignUpFormFields {
  email: string;
  fullname: string;
  password: string;
}
export interface SignUpFormProps {
  isLoading: boolean;
  error: any;
  handleSubmit: (values: SignUpFormFields) => void;
}

const SignUpForm = ({ handleSubmit, isLoading, error }: SignUpFormProps) => {
  const initialValues: SignUpFormFields = {
    email: '',
    fullname: '',
    password: '',
  };

  return (
    <div className="loginForm-container">
      <div className="loginAuth-container">
        <Logo customClass="logo" size="l" />

        <Formik
          initialValues={initialValues}
          onSubmit={(values: SignUpFormFields) => handleSubmit(values)}
          validationSchema={signUpValidator}
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
                name="fullname"
                value={values.fullname}
                error={errors.fullname}
                onChange={handleChange}
                placeholder="Type your full name"
                label="Full name"
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
              <Button onClick={handleSubmit} title="Sign Up" variant={'primary'} />
              {error && <label className="unmatch-error">Ya regsitrarmos esta dirección de correo electrónico</label>}
              <p className="login-form-forgot-password">
                By signing up, you accept the <Link text="Data Policy" redirectTo="/" /> and the{' '}
                <Link text="Cookies Policy." redirectTo="/" />
              </p>
              <p className="login-form-forgot-password">
                Already have an account? <Link text="Log in" redirectTo="/login" />
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
