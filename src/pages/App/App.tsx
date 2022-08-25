import React from 'react';
import RequireAuth from '../../components/Routes/RequireAuth';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../contexts/useAuth';

import routes from '../../routes';

interface Route {
  key: string;
  path: string;
  element: JSX.Element;
  isPrivate: boolean;
}

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        {routes.map((route: Route) => (
          <Route
            key={route.key}
            path={route.path}
            element={route.isPrivate ? <RequireAuth>{route.element}</RequireAuth> : route.element}
          />
        ))}
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
