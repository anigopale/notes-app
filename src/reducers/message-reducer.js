import { AUTH_MESSAGE } from '../actions/types';

export default function(state="", action) {
  switch (action.type) {
    case AUTH_MESSAGE:
      console.log("inside message reducer:",action.payload);
      return action.payload;

  }
  return state;
}
