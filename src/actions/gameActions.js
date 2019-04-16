import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getGames = () => {
  return async (dispatch) => {
    
  }
}

export const getFeed = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/games',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '20',
        sort: 'original_release_date:desc',
        field_list: 'api_detail_url,date_added,deck,description,expected_release_month,expected_release_quarter,expected_release_year,guid,id,image,image_tags,name,number_of_user_reviews,original_game_rating,original_release_date,platforms,site_detail_url'
      }
    });
    console.log(results.data);
  }
}
