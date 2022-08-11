import React from 'react';
import routesPaths from './paths';
import LoginPage from '../pages/LoginPage';

const routes = [
  {
    key: 'login',
    path: routesPaths.login,
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    key: 'login',
    path: routesPaths.index,
    element: <h1>home</h1>, //HomePage it's not created yet :)
    isPrivate: true,
  },
];

export default routes;
