import axios from 'axios';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';
console.log(process.env.REACT_APP_API_URL);
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export default client;
