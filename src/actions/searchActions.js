import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const searchGames = (query, page) => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/search`,{
      params: {
        api_key: GBAPI,
        format: 'json',
        page: page,
        query: query,
        resources: 'game',
        field_list: 'guid,id,name,image'
      }
    });
    dispatch({
      type: actionTypes.SEARCH,
      payload: {
        searchResults: results.data.results,
        totalResults: results.data.number_of_total_results,
        page: page
      }
    })
  }
}