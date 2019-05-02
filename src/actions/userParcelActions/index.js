import { FETCH_PARCELS_SUCCESS } from '../types';

const token = localStorage.getItem('accessToken');

const userParcelsAction = userId => dispatch => fetch(`https://apple-sendit.herokuapp.com/api/v2/users/${userId}/parcels/`, {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then(res => res.json())
  .then((data) => {
    if (data.message) {
      dispatch({
        type: FETCH_PARCELS_SUCCESS,
        payload: {
          message: data.message,
          data: data.data,
        },
      });
    }
  });

export default userParcelsAction;
