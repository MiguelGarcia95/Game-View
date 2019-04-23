import * as actionTypes from '../actions/types';

const initialState = {
  homeGames: [],
  homeVideos: [],
  games: [],
  homeReleases: [],
  platforms: [],
  game: null
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
    case actionTypes.GET_HOME_GAME_RELEASES: 
      return {
        ...state,
        homeReleases: action.payload.releases
      }
    case actionTypes.GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload.releases
      }
    case actionTypes.GET_GAME: 
      return {
        ...state,
        game: action.payload.game
      }
    default:
      return state;
  }
}

export default gameReducer;