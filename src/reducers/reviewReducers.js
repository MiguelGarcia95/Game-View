import * as actionTypes from '../actions/types';

const initialState = {
  homeReviews: [],
  reviews: [],
  currentReview: null
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS: 
      return {
        ...state,
        reviews: action.payload.reviews
      }
    case actionTypes.GET_HOME_REVIEWS: 
      return {
        ...state,
        homeReviews: action.payload.reviews
      }
    case actionTypes.GET_REVIEW: 
      return {
        ...state,
        currentReview: action.payload.currentReview
      }
    default:
      return state;
  }
}

export default reviewReducer;