import React from 'react';
import LoginForm from '../../components/LoginForm';
import Background from '../../assets/wallpaper.png';
import './loginPage.css';

const LoginPage = () => {
  const loginRequest = () => {
    console.log('Login request: Work in progress');
  };

  const containerStyle = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <LoginForm onSubmit={loginRequest} customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default LoginPage;
