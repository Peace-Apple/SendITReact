import { FETCH_PARCELS_SUCCESS } from '../../actions/types';

const initialState = {
  isSuccessful: false,
  parcels: [],
};
const userParcelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARCELS_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        message: action.payload.message,
        parcels: action.payload.data,
      };

    default:
      return state;
  }
};

export default userParcelsReducer;
