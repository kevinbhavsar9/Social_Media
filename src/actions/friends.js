import { APIUrls } from '../helpers/url';
import {
  ADD_FRIEND,
  FETCH_FRIEND_SUCCESS,
  REMOVE_FRIEND,
  UNMOUNT_FRIEND,
} from '../actions/actionTypes';

export function addFriendToStore(friends) {
  return {
    type: FETCH_FRIEND_SUCCESS,
    friends,
  };
}

export function fetchFriends() {
  console.log('fetch started');
  return (dispatch) => {
    const url = APIUrls.fetchFriend();
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
          // console.log(data.data.friends);
          dispatch(addFriendToStore(data.data.friends));
          return;
        }
        //error handle
      });
  };
}
export function addFriend(user) {
  return {
    type: ADD_FRIEND,
    user,
  };
}
export function removeFriend(id) {
  return {
    type: REMOVE_FRIEND,
    id,
  };
}
export function unmountFriends() {
  return {
    type: UNMOUNT_FRIEND,
  };
}
