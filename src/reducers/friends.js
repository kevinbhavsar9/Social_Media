import {
  ADD_FRIEND,
  FETCH_FRIEND_SUCCESS,
  REMOVE_FRIEND,
  UNMOUNT_FRIEND,
} from '../actions/actionTypes';
const initialFriendState = [];

export default function friends(state = initialFriendState, action) {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESS:
      return [...action.friends];
    case ADD_FRIEND:
      return [...state, action.user];
    case REMOVE_FRIEND:
      const newArr = state.filter((friend) => friend.to_user._id !== action.id);
      return newArr;
    case UNMOUNT_FRIEND:
      return initialFriendState;
    default:
      return state;
  }
}
