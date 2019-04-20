import * as actionTypes from '../actions/types';
import axios from 'axios';
import moment from 'moment';
import {GBAPI} from '../apiKeys';

export const getHomeGames = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/games',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'original_release_date:desc',
        field_list: 'api_detail_url,date_added,deck,description,expected_release_month,expected_release_quarter,expected_release_year,guid,id,image,image_tags,name,number_of_user_reviews,original_game_rating,original_release_date,platforms,site_detail_url'
      }
    });
    dispatch({
      type: actionTypes.GET_HOME_GAMES,
      payload: {
        games: results.data.results
      }
    })
  }
}

export const getHomeGameReleases = () => {
  return async (dispatch) => {
    let end = new Date();
    let start = new Date();
    start.setMonth(start.getMonth() - 1);
    const results = await axios.get('https://www.giantbomb.com/api/releases',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'release_date:desc',
        filter: `release_date:${moment(start).format('YYYY-MM-DD')}|${moment(end).format('YYYY-MM-DD')}`,
        field_list: 'api_detail_url,expected_release_year,date_added,date_last_updated,deck,description,image,guid,id,game,name,release_date'
      }
    });
    console.log(results);
    // dispatch({
    //   type: actionTypes.GET_HOME_GAME_RELEASES,
    //   payload: {
    //     releases: results.data.results
    //   }
    // })
  }
}

export const getHomeVideos = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/videos',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'publish_date:desc',
        field_list: 'api_detail_url,deck,embed_player,hd_url,high_url,low_url,image,guid,id,length_seconds,name,publish_date,site_detail_url,url,user,youtube_id'
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

export const getHomePromos = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/franchises',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        // sort: 'date_added:desc',
        field_list: 'aliases,api_detail_url,date_added,date_last_updated,deck,description,guid,id,image,image_tags,name,site_detail_url'
      }
    });
    console.log(results)
    // dispatch({
    //   type: actionTypes.GET_HOME_PROMOS,
    //   payload: {
    //     promos: results.data.results
    //   }
    // })
  }
}




