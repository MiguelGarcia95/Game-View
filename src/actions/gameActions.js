import * as actionTypes from '../actions/types';
import axios from 'axios';
import {IGDBKEY} from '../apiKeys';

export const getGames = () => {
  return async (dispatch) => {

  }
}

export const getFeed = () => {
  return async (dispatch) => {
    
    // 2
    axios({
      url: "https://api-v3.igdb.com/feeds",
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'user-key': IGDBKEY
      },
      data: "fields category,content,created_at,feed_likes_count,feed_video,games,meta,published_at,pulse,slug,title,uid,updated_at,url,user;"
    })
      .then(response => {
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
      });
  }
}
