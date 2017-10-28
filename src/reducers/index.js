import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth-reducer';
import messageReducer from './message-reducer';
import notesReducer from './notes-reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  message: messageReducer,
  notesTitle: notesReducer
});

export default rootReducer;
