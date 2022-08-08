import React from 'react';
import LoginForm from '../../components/LoginForm';
import './loginPage.css';

const LoginPage = () => {
  const loginRequest = () => {
    console.log('Login request: Work in progress');
  };

  return (
    <>
      <div className="container">
        <LoginForm onSubmit={loginRequest} customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default LoginPage;
