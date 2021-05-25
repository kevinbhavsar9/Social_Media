import { UPDATE_POSTS } from '../actions/actionTypes';
import { ApiUrls } from '../helpers/url';

export function fetchPosts() {
  return (dispatch) => {
    const url = ApiUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
