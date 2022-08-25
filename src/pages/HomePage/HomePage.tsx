import React from 'react';
import Button from '../../components/Common/Button';
import useAuth from '../../contexts/useAuth';

const HomePage = () => {
  const { logout } = useAuth();
  //WIP
  return (
    <>
      <div>
        <h1>HomePage!</h1>
        <Button onClick={logout} title="Logout" />
      </div>
    </>
  );
};

export default HomePage;
