import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import routesPaths from '../../routes/paths';

//The folowig code was taken from react-router v6 docs

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  let location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={routesPaths.login} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
