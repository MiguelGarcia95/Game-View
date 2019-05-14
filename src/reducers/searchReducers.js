import * as actionTypes from '../actions/types';

const initialState = {
  searchResults: [],
  totalResults: null,
  page: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        searchResults: action.payload.searchResults,
        totalResults: action.payload.totalResults,
        page: action.payload.page
      }
    default:
      return state;
  }
}

export default searchReducer;