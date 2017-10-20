import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_MESSAGE } from './types';
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
      .catch(() => {
        dispatch({
          type: AUTH_MESSAGE ,
          payload: "Bad login"
        })
      })
  }
}

export function signupUser(values) {
  return function(dispatch) {
    const request = axios.post(`${ROOT_URL}/api/register/`, values)
      .then((response) => {
        dispatch({
          type: AUTH_MESSAGE,
          payload: "Account created successfully"
        })
      })
      .catch((response) => {
        dispatch({
          type: AUTH_MESSAGE,
          payload: "Bad Sign up"
        })
      })


  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function eraseMessage() {
  return { type: AUTH_MESSAGE, payload: "" }
}

export function searchItems(term) {
  console.log("reached to searchItem",term);
}
