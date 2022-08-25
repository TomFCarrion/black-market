import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import Background from '../../assets/wallpaper.png';
import { useNavigate } from 'react-router-dom';
import routesPaths from '../../routes/paths';
import useAuth from '../../contexts/useAuth';

import './loginPage.css';

interface LoginFormFields {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, login, loading, error } = useAuth();

  const handleSubmit = (values: LoginFormFields) => login(values.email, values.password);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routesPaths.index);
    }
  }, [isAuthenticated]);

  const containerStyle = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <LoginForm handleSubmit={handleSubmit} isLoading={loading} error={error} />
      </div>
    </>
  );
};

export default LoginPage;
