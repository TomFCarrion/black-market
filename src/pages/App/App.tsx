import React from 'react';
import RequireAuth from '../../components/Routes/RequireAuth';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '../../contexts/auth-context';
import routes from '../../routes';

window.console.log(routes);
const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        {routes.map((route: any) => (
          <Route
            key={route.key}
            path={route.path}
            element={route.private ? <RequireAuth>{route.element}</RequireAuth> : route.element}
          />
        ))}
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
