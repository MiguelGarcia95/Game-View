import * as actionTypes from '../actions/types';

const initialState = {
  review: null,
  reviews: null,
  totalResults: null,
  offset: 0
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS: 
      return {
        ...state,
        reviews: action.payload.reviews,
        totalResults: action.payload.totalResults,
        offset: action.payload.offset
      }
    case actionTypes.GET_REVIEW: 
      return {
        ...state,
        review: action.payload.review
      }
    case actionTypes.CLEAR_REVIEW:
      return {
        ...state,
        review: action.payload.review
      }
    default:
      return state;
  }
}

export default reviewReducer;