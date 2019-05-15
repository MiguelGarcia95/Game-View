import * as actionTypes from '../actions/types';

const initialState = {
  franchise: null,
  franchises: null,
  totalResults: null,
  offset: 0
};

const franchiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FRANCHISES: 
      return {
        ...state,
        franchises: action.payload.franchises,
        totalResults: action.payload.totalResults,
        offset: action.payload.offset
      }
    case actionTypes.GET_FRANCHISE: 
      return {
        ...state,
        franchise: action.payload.franchise
      }
    case actionTypes.CLEAR_FRANCHISE:
      return {
        ...state,
        franchise: action.payload.franchise
      }
    default:
      return state;
  }
}

export default franchiseReducer;