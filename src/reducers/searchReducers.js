import * as actionTypes from '../actions/types';

const initialState = {
  searchResults: null,
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
    case actionTypes.CLEAR_SEARCH:
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