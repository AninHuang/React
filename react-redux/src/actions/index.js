import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import { FETCH_USERS_DATA } from '../constants/actionTypes';

export const fetchUserData = () => dispatch => {
  return axios.get(`${API_ENDPOINT}/users`)
    .then(res => {
      dispatch({
        type: FETCH_USERS_DATA,
        data: res.data
      })
    })
    .catch(err => {
      throw(err);
    });
}
