import * as actionTypes from '../actions/types';

const initialState = {
  franchises: [],
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
    default:
      return state;
  }
}

export default franchiseReducer;