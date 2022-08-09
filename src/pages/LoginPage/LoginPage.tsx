import React from 'react';
import LoginForm from '../../components/LoginForm';
import './loginPage.css';

const LoginPage = () => {
  const loginRequest = () => {
    console.log('Login request: Work in progress');
  };

  return (
    <>
      <div className="login-page">
        <LoginForm onSubmit={loginRequest} customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default LoginPage;
