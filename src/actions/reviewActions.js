import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getReviews = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/reviews`, {
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '20',
        sort: 'publish_date:desc',
        field_list: 'api_detail_url,deck,description,dlc_name,game,guid,id,publish_date,release,reviewer,score,site_detail_url'
      }
    });
    console.log(results);
  }
}

// URL: https://www.giantbomb.com/api/reviews/?api_key=[YOUR API KEY]