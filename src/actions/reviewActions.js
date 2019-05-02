import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getHomeReviews = () => {
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
    dispatch({
      type: actionTypes.GET_HOME_REVIEWS,
      payload: {
        reviews: results.data.results
      }
    })
  }
}

export const getReviews = (offset) => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/reviews`, {
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '50',
        sort: 'guid:desc',
        offset: offset,
        field_list: 'deck,description,dlc_name,game,guid,id,publish_date,release,reviewer,score'
      }
    });
    dispatch({
      type: actionTypes.GET_REVIEWS,
      payload: {
        reviews: results.data.results,
        totalResults: results.data.number_of_total_results,
        offset: results.data.offset
      }
    })
  }
}

export const getReview = guid => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/review/${guid}`, {
      params: {
        api_key: GBAPI,
        format: 'json',
        field_list: 'deck,description,dlc_name,game,guid,id,publish_date,release,reviewer,score'
      }
    });
    dispatch({
      type: actionTypes.GET_REVIEW,
      payload: {
        review: results.data.results
      }
    })
  }
}