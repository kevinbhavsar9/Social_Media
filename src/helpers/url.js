const API_ROOT = `http://codeial.codingninjas.com:8000/api/v2`;

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  fetchPosts: (page = 1, limit = 25) =>
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  edit: () => `${API_ROOT}/users/edit`,
  fetch: (id) => `${API_ROOT}/users/${id}`,
  addFriend: (user_id) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${user_id}`,
  fetchFriend: () => `${API_ROOT}/friendship/fetch_user_friends`,
  removeFriend: (user_id) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${user_id}`,
  // fetchFriend: () => `${API_ROOT}/friendship/fetch_user_friends`,
};
