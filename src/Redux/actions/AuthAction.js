import axios from 'axios';
import {apiCall} from '../../Utils/httpClient';
import apiEndPoints from '../../Utils/apiEndPoints';
import {LANGUAGE_ADD, LANGUAGE_GET, PROFILE_ADD, REMOVE_AUTH} from '../Types';

export const UserLogin = params => async dispatch => {
  try {
    const res = await apiCall('post', apiEndPoints.LOGIN, {phoneno: params});
    console.log('res in login', res);
    if (res.status === 200) {
      dispatch({
        type: LANGUAGE_GET,
        payload: res,
      });
    } else if (res.status === 201) {
      dispatch({
        type: LANGUAGE_GET,
        payload: res,
      });
    } else {
      dispatch({
        type: LANGUAGE_GET,
        payload: [],
      });
    }
  } catch (error) {
    console.log('error in login', error);
  }
};
export const getLanguage = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.LANGUAGEADD);
    if (res.status === 200) {
      dispatch({
        type: LANGUAGE_GET,
        payload: res.data,
      });
    } else {
      dispatch({
        type: LANGUAGE_GET,
        payload: [],
      });
    }
  } catch (error) {
    console.log('error in lang', error);
  }
};

export const addLanguage = params => async dispatch => {
  console.log(params);
  try {
    const res = await apiCall('post', apiEndPoints.LANGUAGEPOST, params);
    console.log('res in lag add', res);
    if (res.status === 200) {
      dispatch({
        type: LANGUAGE_ADD,
        payload: res,
      });
    } else if (res.status === 201) {
      dispatch({
        type: LANGUAGE_ADD,
        payload: res,
      });
    }
  } catch (error) {
    console.log('error in add lang');
  }
};

export const addUserProfile = params => async dispatch => {
  console.log(params);
  try {
    const res = await apiCall('post', apiEndPoints.ADDUSER, params);
    console.log('res in usser add', res);
    if (res.status === 201) {
      dispatch({
        type: PROFILE_ADD,
        payload: res,
      });
    }
  } catch (error) {
    console.log('error in add user');
  }
};


export const removeAuthState = () => async dispach => {
  try {
    dispach({
      type: REMOVE_AUTH,
      payload: null,
    })
  } catch (error) {}
};
