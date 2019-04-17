import * as actionTypes from '../actions/types';

const initialState = {
  reviews: [],
  currentReview: null
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS: 
      return {
        ...state,
        reviews: action.payload.reviews
      }
    default:
      return state;
  }
}

export default reviewReducer;