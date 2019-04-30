import {combineReducers} from 'redux';
import gameReducers from './gameReducers';
import reviewReducers from './reviewReducers';
import videoReducers from './videoReducers';
import searchReducers from './searchReducers';
import franchiseReducers from './franchiseReducers';

const rootReducer = combineReducers({
  games: gameReducers,
  reviews: reviewReducers,
  videos: videoReducers,
  results: searchReducers,
  franchises: franchiseReducers
})

export default rootReducer;