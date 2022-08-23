import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sessionsApi } from '../api/session';

interface SessionDataType {
  'access-token': string;
  client: string;
  expiry: number;
  uid: string;
}

interface AuthContextType {
  sessionData?: SessionDataType;
  loading: boolean;
  isAuthenticated: boolean;
  error: any;
  login: (email: string, password: string) => void;
  signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<SessionDataType>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  //check if there's a currert session on mount
  useEffect(() => {
    let headers = localStorage.getItem('headers');

    if (headers) {
      setIsAuthenticated(true);
      setSessionData(JSON.parse(headers));
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const parseSessionData = (session: any) => {
    const { headers } = session;
    let sessionDataParsed = {} as SessionDataType;
    sessionDataParsed['access-token'] = headers['access-token'];
    sessionDataParsed.client = headers.client;
    sessionDataParsed.expiry = headers.expiry;
    sessionDataParsed.uid = headers.uid;
    localStorage.setItem('headers', JSON.stringify(sessionDataParsed)); //need to find a cleaner solution

    return sessionDataParsed;
  };

  const login = (email: string, password: string) => {
    setLoading(true);

    sessionsApi
      .login({ email, password })
      .then((data) => {
        setIsAuthenticated(true);
        setSessionData(parseSessionData(data));

        navigate('/', { replace: true });
      })
      .catch((error: any) => setError(error))
      .finally(() => setLoading(false));
  };

  const signUp = (email: string, name: string, password: string) => {
    setLoading(true);

    sessionsApi
      .signUp({ email, name, password })
      .then(() => {
        navigate('login', { replace: true });
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    sessionsApi.logout(sessionData).then(() => {
      setSessionData(undefined);
      setIsAuthenticated(false);
      navigate('login', { replace: true });
      localStorage.removeItem('headers');
    });
  };

  const memoedValue = useMemo(
    () => ({
      sessionData,
      isAuthenticated,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [sessionData, loading, error, isAuthenticated]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
