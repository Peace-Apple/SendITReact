import { CREATE_PARCEL_SUCCESS, CREATE_PARCEL_FAIL } from '../../actions/types';

const initialState = {
  isSuccessful: false,
  errors: {},
};
const parcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARCEL_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        message: action.payload.message,
        data: action.payload.data,
        errors: {},
      };

    case CREATE_PARCEL_FAIL:
      return {
        ...state,
        isSuccessful: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default parcelReducer;
