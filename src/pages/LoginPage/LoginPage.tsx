import React from 'react';
import LoginForm from '../../components/LoginForm';
import Background from '../../assets/wallpaper.png';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const loginRequest = () => navigate('home');

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
