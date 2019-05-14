import * as actionTypes from '../actions/types';
import axios from 'axios';
import {GBAPI} from '../apiKeys';

export const getHomeVideos = () => {
  return async (dispatch) => {
    const results = await axios.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/videos',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'publish_date:desc',
        field_list: 'deck,embed_player,image,guid,id,name,publish_date,user,youtube_id'
      }
    });
    dispatch({
      type: actionTypes.GET_HOME_VIDEOS,
      payload: {
        videos: results.data.results
      }
    })
  }
}



