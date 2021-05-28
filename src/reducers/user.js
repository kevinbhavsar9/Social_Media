import {
  FETCHED_USER,
  FETCH_USER_FAILED,
  FETCH_USER_START,
} from '../actions/actionTypes';

const initialUserstate = {
  user: {},
  error: null,
  inProcess: false,
};

export default function user(state = initialUserstate, action) {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        inProcess: true,
      };
    case FETCHED_USER:
      return {
        ...state,
        user: action.user,
        inProcess: false,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
}
