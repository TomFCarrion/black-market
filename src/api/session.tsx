import client from './httpClient/index';

interface User {
  email: string;
  password: string;
  name?: string;
}

const login = (User: { email: string; password: string }): Promise<User> => {
  return client.post('/auth/sign_in', JSON.stringify({ user: { ...User } }));
};

const signUp = (User: { email: string; name: string; password: string }): Promise<User> => {
  return client.post('/auth', JSON.stringify({ user: { ...User } }));
};

export async function logout(sessionData: any) {
  const config = { headers: { ...sessionData } };
  const response = await client.delete('/auth/sign_out', config);

  return response.data.data;
}

export const sessionsApi = {
  login,
  logout,
  signUp,
};
