import {combineReducers} from 'redux';
import gameReducers from './gameReducers';
import reviewReducers from './reviewReducers';
import videoReducers from './videoReducers';
import searchReducers from './searchReducers';
import franchiseReducers from './franchiseReducers';
import characterReducers from './characterReducers';

const rootReducer = combineReducers({
  games: gameReducers,
  reviews: reviewReducers,
  videos: videoReducers,
  results: searchReducers,
  franchises: franchiseReducers,
  characters: characterReducers
})

export default rootReducer;