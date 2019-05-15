import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getReviews = (offset) => {
  return async (dispatch) => {
    const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/reviews`, {
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

export const clearReview = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_REVIEW,
      payload: {
        review: null
      }
    })
  }
}

export const getReview = guid => {
  return async (dispatch) => {
    const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/review/${guid}`, {
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