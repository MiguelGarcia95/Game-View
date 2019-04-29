import * as actionTypes from '../actions/types';
import axios from 'axios';
import moment from 'moment';
import {GBAPI} from '../apiKeys';

export const getCharacters = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/characters',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        // sort: 'date_added:desc',
        field_list: 'aliases,api_detail_url,date_added,date_last_updated,deck,description,guid,id,image,image_tags,name,site_detail_url'
      }
    });
    console.log(results)
    dispatch({
      type: actionTypes.GET_CHARACTERS,
      payload: {
        characters: results.data.results
      }
    })
  }
}

export const getCharacter = guid => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/character/${guid}`,{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        // sort: 'date_added:desc',
        field_list: 'aliases,api_detail_url,date_added,date_last_updated,deck,description,guid,id,image,image_tags,name,site_detail_url'
      }
    });
    console.log(results)
    dispatch({
      type: actionTypes.GET_CHARACTER,
      payload: {
        character: results.data.results
      }
    })
  }
}