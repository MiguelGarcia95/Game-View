import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getCharacters = offset => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/characters',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '50',
        offset: offset,
        field_list: 'date_added,date_last_updated,deck,description,guid,id,image,name'
      }
    });
    dispatch({
      type: actionTypes.GET_CHARACTERS,
      payload: {
        characters: results.data.results,
        totalResults: results.data.number_of_total_results,
        offset: results.data.offset
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
        field_list: 'aliases,api_detail_url,date_added,date_last_updated,deck,description,games,guid,id,image,image_tags,name,site_detail_url'
      }
    });
    dispatch({
      type: actionTypes.GET_CHARACTER,
      payload: {
        character: results.data.results
      }
    })
  }
}
