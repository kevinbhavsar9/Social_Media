import { APIUrls } from '../helpers/url';
import {
  FETCHED_USER,
  FETCH_USER_START,
  FETCH_USER_FAILED,
  ADD_FRIEND,
} from './actionTypes';

export function fetchedUser(user) {
  return {
    type: FETCHED_USER,
    user,
  };
}
export function fetchedUserFailed(error) {
  return {
    type: FETCH_USER_FAILED,
    error,
  };
}
export function fetchedUserStarted() {
  return {
    type: FETCH_USER_START,
  };
}

export function fetchUserById(id) {
  return (dispatch) => {
    dispatch(fetchedUserStarted());
    const url = APIUrls.fetch(id);
    const token = localStorage.getItem('token');
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(fetchedUser(data.data.user));
          return;
        }
        return dispatch(fetchedUserFailed(data.message));
      });
  };
}

export function addFriend(id_friend) {
  return (dispatch) => {
    const url = APIUrls.addFriend(id_friend);
    const token = localStorage.getItem('token');
    fetch(url, {
      type: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
}
