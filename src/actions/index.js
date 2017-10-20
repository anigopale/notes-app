import axios from 'axios';

const ROOT_URL = "https://notes-using-drf.herokuapp.com/"

export function loginUser(values) {
  return function(dispatch) {
    console.log("inside loginUser, received data", values);
    const request = axios.post(`${ROOT_URL}/api/auth/token/`,
    values)
      .then((response) =>{ console.log(response.data.token)})
      .catch((response) => {console.log("log response:",response)})

  }


}
