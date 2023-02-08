import Cookies from 'js-cookie';

export const logOut = () => {
  Cookies.remove('token');
  window.location.href = '/';
};
