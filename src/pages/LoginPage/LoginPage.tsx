import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import Background from '../../assets/wallpaper.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import './loginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('home');
    }
  }, [isAuthenticated]);

  const containerStyle = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <LoginForm customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default LoginPage;
