import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const search = (query, page, type) => {
  return async (dispatch) => {
    if (type === 'franchise') {
      type = 'franchises';
    }
    const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search`,{
      params: {
        api_key: GBAPI,
        format: 'json',
        page: page,
        query: query,
        resources: type,
        field_list: 'guid,id,name,image'
      }
    });
    console.log(results)
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
