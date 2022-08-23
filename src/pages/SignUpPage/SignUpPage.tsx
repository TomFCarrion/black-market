import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import Background from '../../assets/wallpaper.png';
import './SignUpPage.css';

const SignUpPage = () => {
  const containerStyle = {
    backgroundImage: `url(${Background})`, //needs to be addressed
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <SignUpForm customClass={'floatLeft'} />
      </div>
    </>
  );
};

export default SignUpPage;
