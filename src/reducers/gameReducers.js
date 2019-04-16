import * as actionTypes from '../actions/types';

const initialState = {
  games: [],
  currentGame: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default gameReducer;