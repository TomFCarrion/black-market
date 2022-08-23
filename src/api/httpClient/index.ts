import axios from 'axios';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';
const client = axios.create({
  baseURL: 'https://blackmarket-api.herokuapp.com/api/v1', //Path needs to be an env variable, but webpack it's thowing a 'process not defined error' need to check it
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export default client;
