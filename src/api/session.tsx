import client from './httpClient/index';
import { auth } from './endpoints';

interface User {
  email: string;
  password: string;
  name?: string;
}

interface SessionDataType {
  'access-token': string;
  client: string;
  expiry: number;
  uid: string;
}

const login = async (user: Pick<User, 'email' | 'password'>): Promise<User> => {
  return await client.post(auth.LOG_IN, JSON.stringify({ user: { ...user } }));
};
const signUp = async (user: Pick<User, 'email' | 'name' | 'password'>): Promise<User> => {
  return await client.post(auth.SIGN_UP, JSON.stringify({ user: { ...user } }));
};

const logout = async (sessionData: SessionDataType) => {
  const config = { headers: { ...sessionData } };
  await client.delete(auth.LOG_OUT, config);
};

export const sessionsApi = {
  login,
  logout,
  signUp,
};
