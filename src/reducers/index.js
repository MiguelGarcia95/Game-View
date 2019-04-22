import {combineReducers} from 'redux';
import gameReducers from './gameReducers';
import reviewReducers from './reviewReducers';
import videoReducers from './videoReducers';

const rootReducer = combineReducers({
  games: gameReducers,
  reviews: reviewReducers,
  videos: videoReducers
})

export default rootReducer;