import React from 'react';
import routesPaths from './paths';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
const routes = [
  {
    key: routesPaths.login,
    path: routesPaths.login,
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    key: routesPaths.index,
    path: routesPaths.index,
    element: <HomePage />,
    isPrivate: true,
  },
  {
    key: routesPaths.singup,
    path: routesPaths.singup,
    element: <SignUpPage />,
    isPrivate: false,
  },
];

export default routes;
