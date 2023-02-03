import axios from 'axios';

function login(data: { email: string; password: string }) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/login',
    data
  );
}

export { login };
