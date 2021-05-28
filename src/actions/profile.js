import { APIUrls } from '../helpers/url';
import { getFormBody } from '../helpers/utils';
import { EDIT_FAILED } from './actionTypes';

export function editProfileFailed(errorMessage) {
  return {
    type: EDIT_FAILED,
    error: errorMessage,
  };
}

export function editProfile(id, password, confirm_password, name) {
  return (dispatch) => {
    const url = APIUrls.edit();
    const token = localStorage.getItem('token');
    // console.log(token);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${token}`,
      },
      body: getFormBody({ name, password, confirm_password, id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('token', data.token);
          return;
        }
        dispatch(editProfileFailed(data.message));
      });
  };
}
