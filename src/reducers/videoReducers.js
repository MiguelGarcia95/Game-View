import * as actionTypes from '../actions/types';

const initialState = {
  homeVideos: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_VIDEOS:
      return {
        ...state,
        homeVideos: action.payload.videos
      }
    default:
      return state;
  }
}

export default gameReducer;