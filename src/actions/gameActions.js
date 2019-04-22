import * as actionTypes from '../actions/types';
import axios from 'axios';
import moment from 'moment';
import {GBAPI} from '../apiKeys';

export const getHomeGames = () => {
  return async (dispatch) => {
    let end = new Date();
    let start = new Date();
    end.setMonth(end.getMonth() + (Math.floor(Math.random() * 12) + 6));
    const results = await axios.get('https://www.giantbomb.com/api/games',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '10',
        filter: `original_release_date:${moment(start).format('YYYY-MM-DD')}|${moment(end).format('YYYY-MM-DD')}`,
        sort: 'original_release_date:desc',
        field_list: 'deck,expected_release_year,guid,id,image,name,original_release_date'
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

export const getGame = guid => {
  return async (dispatch) => {
    const results = await axios.get(`https://www.giantbomb.com/api/game/${guid}/`,{
      params: {
        api_key: GBAPI,
        format: 'json',
        field_list: 'date_added,deck,description,expected_release_month,expected_release_quarter,expected_release_year,guid,id,image,image_tags,name,number_of_user_reviews,original_game_rating,original_release_date,platforms,site_detail_url'
        // field_list: 'deck,expected_release_year,guid,id,image,name,original_release_date'
      }
    });
    dispatch({
      type: actionTypes.GET_GAME,
      payload: {
        game: results.data.results
      }
    })
  }
}



export const getHomeGameReleases = () => {
  return async (dispatch) => {
    let end = new Date();
    let start = new Date();
    start.setDate(start.getDate() - 14);
    // start.setMonth(start.getMonth() - 1);
    const results = await axios.get('https://www.giantbomb.com/api/releases',{
      params: {
        api_key: GBAPI,
        format: 'json',
        limit: '20',
        sort: 'release_date:desc',
        filter: `release_date:${moment(start).format('YYYY-MM-DD')}|${moment(end).format('YYYY-MM-DD')}`,
        field_list: 'image,guid,id,game,name,release_date,platform'
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

export const getFranchises = () => {
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
    //   type: actionTypes.GET_FRANCHISES,
    //   payload: {
    //     promos: results.data.results
    //   }
    // })
  }
}




