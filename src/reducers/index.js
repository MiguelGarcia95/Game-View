import {combineReducers} from 'redux';
import gameReducers from './gameReducers';
import reviewReducers from './reviewReducers';

const rootReducer = combineReducers({
  games: gameReducers,
  reviews: reviewReducers
})

export default rootReducer;