import axios from 'axios';

function login(values: { email: string; password: string }) {
  return axios.post(
    'https://paracuando-academlo-api.academlo.tech/api/v1/auth/login',
    values
  );
}

function signUp(values: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) {
  return axios.post(
    'https://paracuando-academlo-api.academlo.tech/api/v1/auth/sign-up',
    values
  );
}

export { login, signUp };
