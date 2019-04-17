import * as actionTypes from '../actions/types';

const initialState = {
  reviews: [],
  currentReview: null
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS: 
      return {
        ...state,
        currentReview: action.payload.currentReview
      }
    case actionTypes.GET_REVIEW: 
      return {
        ...state,
        reviews: action.payload.reviews
      }
    default:
      return state;
  }
}

export default reviewReducer;