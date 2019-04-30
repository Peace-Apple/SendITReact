import { CREATE_PARCEL_SUCCESS, CREATE_PARCEL_FAIL } from '../types';

const token = localStorage.getItem('accessToken');
const parcelAction = parcelData => dispatch => fetch('https://apple-sendit.herokuapp.com/api/v2/parcels/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
  cache: 'no-cache',
  body: JSON.stringify(parcelData),

})
  .then(res => res.json())
  .then((data) => {
    if (data.error_message) {
      dispatch({
        type: CREATE_PARCEL_FAIL,
        payload: {
          data: data.data,
          error_message: data.error_message,
          status: data.status,
        },
      });
    } else {
      dispatch({
        type: CREATE_PARCEL_SUCCESS,
        payload: {
          message: data.message,
          data: data.data,
        },
      });
    }
  });

export default parcelAction;
