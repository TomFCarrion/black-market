import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import Background from '../../assets/wallpaper.png';
import useAuth from '../../contexts/useAuth';
import './SignUpPage.css';
interface SignUpFormFields {
  email: string;
  fullname: string;
  password: string;
}

const SignUpPage = () => {
  const { signUp, loading, error } = useAuth();

  const handleSubmit = (values: SignUpFormFields) => signUp(values.email, values.fullname, values.password);

  const containerStyle = {
    backgroundImage: `url(${Background})`, //needs to be addressed
  };

  return (
    <>
      <div style={containerStyle} className="login-page">
        <SignUpForm handleSubmit={handleSubmit} isLoading={loading} error={error} />
      </div>
    </>
  );
};

export default SignUpPage;
