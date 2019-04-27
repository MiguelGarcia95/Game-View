import * as actionTypes from '../actions/types';

const initialState = {
  homeGames: [],
  homeVideos: [],
  games: [],
  homeReleases: [],
  searchResults: [],
  totalResults: null,
  page: 1,
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
    case actionTypes.GET_GAME: 
      return {
        ...state,
        game: action.payload.game
      }
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

export default gameReducer;