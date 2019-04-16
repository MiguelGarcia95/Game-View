import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getGames = () => {
  return async (dispatch) => {
    
  }
}

export const getFeed = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/games/?api_key=${GBAPI}&format=json&limit=20&sort=original_release_date:desc&field_list=genres,name`);
    console.log(results);
    // 2
  }
}


// URL: https://www.giantbomb.com/api/reviews/?api_key=[YOUR API KEY]