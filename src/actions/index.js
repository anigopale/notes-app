import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_MESSAGE, POST_NOTES } from './types';
import { browserHistory } from 'react-router';

const ROOT_URL = "https://notes-using-drf.herokuapp.com"

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
  console.log("reached to searchItem, token",term, localStorage.getItem('token'));
  axios("https://jsonplaceholder.typicode.com/posts/1")
  .then( response => console.log(response))

  const request = axios(`https://admin:notes1234@notes-using-drf.herokuapp.com/api/note/`)
    .then(response => {
      console.log(response.headers);
    })
    .catch(response => {
      console.log(response);
  })
  console.log("this is request:", request);
}


export function postNotes(text, title) {
  console.log("data reached to postNotes(),",text,title);
  localStorage.setItem(title, text);
  return {
    type: POST_NOTES,
    payload: title
  }
}

export function onDelete(title) {
  localStorage.removeItem(title);
  return { type: "ONDELETE"}
}
