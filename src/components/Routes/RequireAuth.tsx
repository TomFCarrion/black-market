import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

//The folowig code was taken from react-router v6 docs

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth(); // should be added in a dedicated branch
  let location = useLocation();

  if (/*!auth.user*/ false) {
    // should be added in a dedicated branch
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
