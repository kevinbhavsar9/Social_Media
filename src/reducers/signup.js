import { bindActionCreators } from 'redux';
import {
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialSignupState = {
  user: {},
  error: null,
  isSignedup: false,
  inProgress: false,
};

export default function signup(state = initialSignupState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedup: true,
        user: action.user,
      };
    default:
      return state;
  }
}
