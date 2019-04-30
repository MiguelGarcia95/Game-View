import * as actionTypes from '../actions/types';

const initialState = {
  characters: [],
  totalResults: null,
  offset: 0
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS: 
      return {
        ...state,
        characters: action.payload.characters,
        totalResults: action.payload.totalResults,
        offset: action.payload.offset
      }
    default:
      return state;
  }
}

export default characterReducer;