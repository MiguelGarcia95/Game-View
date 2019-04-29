import {combineReducers} from 'redux';
import gameReducers from './gameReducers';
import reviewReducers from './reviewReducers';
import videoReducers from './videoReducers';
import searchReducers from './searchReducers';

const rootReducer = combineReducers({
  games: gameReducers,
  reviews: reviewReducers,
  videos: videoReducers,
  results: searchReducers
})

export default rootReducer;