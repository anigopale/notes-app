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
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })


  }
}

export function signupUser(values) {
  return function(dispatch) {
    const request = axios.post(`${ROOT_URL}/api/register/`, values)
      .then((response) => {
        console.log("inside then",response.payload);
      })

      console.log(request);
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
