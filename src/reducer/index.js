import { combineReducers } from 'redux';
import profileState from './profileReducer';
import loginState from './loginReducer';

export default combineReducers({
  profileState,
  loginState
});
