import * as actionTypes from '../actions/types';

const initialState = {
  homeGames: [],
  homeVideos: [],
  games: [],
  gameReleases: [],
  currentGame: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GAMES: 
      return {
        ...state,
        games: action.payload.games
      }
    case actionTypes.GET_HOME_GAMES: 
      return {
        ...state,
        homeGames: action.payload.games
      }
    case actionTypes.GET_HOME_VIDEOS:
      return {
        ...state,
        homeVideos: action.payload.videos
      }
    case actionTypes.GET_HOME_GAME_RELEASES: 
      return {
        ...state,
        gameReleases: action.payload.releases
      }
    case actionTypes.GET_GAME: 
      return {
        ...state,
        currentGame: action.payload.currentGame
      }
    default:
      return state;
  }
}

export default gameReducer;