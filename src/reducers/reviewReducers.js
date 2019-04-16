import * as actionTypes from '../actions/types';

const initialState = {
  reviews: [],
  currentReview: null
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reviewReducer;