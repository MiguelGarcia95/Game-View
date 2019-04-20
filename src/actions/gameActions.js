import * as actionTypes from '../actions/types';
import axios from 'axios';
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
    const results = await axios.get('https://www.giantbomb.com/api/releases',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'date_added:desc',
        field_list: 'api_detail_url,expected_release_year,date_added,date_last_updated,deck,description,image,guid,id,game,name,release_date'
      }
    });
    dispatch({
      type: actionTypes.GET_HOME_GAME_RELEASES,
      payload: {
        releases: results.data.results
      }
    })
  }
}

export const getHomeVideos = () => {
  return async (dispatch) => {
    const results = await axios.get('https://www.giantbomb.com/api/videos',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'date_added:desc',
        field_list: 'api_detail_url,expected_release_year,date_added,date_last_updated,deck,description,image,guid,id,game,name,release_date'
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
    const results = await axios.get('https://www.giantbomb.com/api/promos',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        sort: 'date_added:desc',
        field_list: 'api_detail_url,date_added,deck,guid,id,image,link,name,resource_type,user'
      }
    });
    console.log(results)
    dispatch({
      type: actionTypes.GET_HOME_PROMOS,
      payload: {
        promos: results.data.results
      }
    })
  }
}

