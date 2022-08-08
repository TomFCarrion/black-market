import React from 'react';
import { Formik } from 'formik';
import './LoginForm.css';
import Logo from '../../assets/Logo.png';
import Input from '../Common/Input';
import Button from '../Common/Button';

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
      <img className="logo" src={Logo} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validateOnMount={false}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                name="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                placeholder="email"
                label="Email"
                className="login-form-input"
              />
            </div>
            <div>
              <Input
                name="password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
                type="password"
                placeholder="********"
                label="Contraseña"
                className="login-form-input"
              />
            </div>
            <Button onClick={handleSubmit} title="Login" />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
