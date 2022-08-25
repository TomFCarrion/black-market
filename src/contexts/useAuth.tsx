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
  const [sessionData, setSessionData] = useState<SessionDataType>({} as SessionDataType);
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
    sessionDataParsed = {
      ...sessionDataParsed,
      ['access-token']: headers['access-token'],
      client: headers.client,
      expiry: headers.expiry,
      uid: headers.uid,
    };
    localStorage.setItem('headers', JSON.stringify(sessionDataParsed)); //need to find a cleaner solution

    return sessionDataParsed;
  };

  const login = async (email: string, password: string) => {
    setLoading(true);

    await sessionsApi
      .login({ email, password })
      .then((data) => {
        setIsAuthenticated(true);
        setSessionData(parseSessionData(data));

        navigate('/', { replace: true });
      })
      .catch((error: any) => setError(error))
      .finally(() => setLoading(false));
  };

  const signUp = async (email: string, name: string, password: string) => {
    setLoading(true);

    await sessionsApi
      .signUp({ email, name, password })
      .then(() => {
        navigate('login', { replace: true });
      })
      .catch((error) => setError(error.response.data.errors))
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    await sessionsApi.logout(sessionData).then(() => {
      setSessionData({} as SessionDataType); //emptying array but keeping shape
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
