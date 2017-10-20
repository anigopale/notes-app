import axios from 'axios';
import { AUTH_USER, UNAUTH_USER } from './types';
import { browserHistory } from 'react-router';

const ROOT_URL = "https://notes-using-drf.herokuapp.com/"

export function loginUser(values) {
  return function(dispatch) {
    console.log("inside loginUser, received data", values);
    const request = axios.post(`${ROOT_URL}/api/auth/token/`,
    values)
      .then((response) => {
        console.log(response.data.token);
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch((response) => {console.log("log response:",response)})
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
