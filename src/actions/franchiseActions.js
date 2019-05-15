import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getFranchises = offset => {
  return async (dispatch) => {
    const results = await axios.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/franchises',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '50',
        offset: offset,
        field_list: 'date_added,date_last_updated,deck,description,guid,id,image,name'
      }
    });
    dispatch({
      type: actionTypes.GET_FRANCHISES,
      payload: {
        franchises: results.data.results,
        totalResults: results.data.number_of_total_results,
        offset: results.data.offset
      }
    })
  }
}

export const getFranchise = guid => {
  return async (dispatch) => {
    const results = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/franchise/${guid}`,{
      params: {
        api_key: GBAPI,
        format: 'json',
        field_list: 'date_added,date_last_updated,deck,description,guid,id,image,name'
      }
    });
    dispatch({
      type: actionTypes.GET_FRANCHISE,
      payload: {
        franchise: results.data.results
      }
    })
  }
}

export const clearFranchise = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_FRANCHISE,
      payload: {
        franchise: null
      }
    })
  }
}