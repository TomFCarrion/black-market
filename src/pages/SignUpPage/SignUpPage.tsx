import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import Background from '../../assets/wallpaper.png';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const singUpRequest = () => navigate('login');

  const containerStyle = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <SignUpForm onSubmit={singUpRequest} customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default SignUpPage;
