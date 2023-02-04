import axios from 'axios';

function login(data: { email: string; password: string }) {
  return axios.post('', data);
}

export { login };
