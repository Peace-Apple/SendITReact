import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import parcelReducer from './parcelReducer';

export default combineReducers({
  loginReducer,
  signupReducer,
  parcelReducer,
});
