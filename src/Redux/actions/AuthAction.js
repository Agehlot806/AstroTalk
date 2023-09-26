import axios from 'axios';
import {apiCall} from '../../Utils/httpClient';
import apiEndPoints from '../../Utils/apiEndPoints';
import {
  LANGUAGE_ADD,
  LANGUAGE_GET,
  OTP_VERIFY,
  PROFILE_ADD,
  REMOVE_AUTH,
  USER_LOGIN,
  USER_LOGOUT,
} from '../Types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserLogin = params => async dispatch => {
  try {
    const res = await apiCall('post', apiEndPoints.LOGIN, {phoneno: params});
    console.log('res in login', res.data);
    if (res.status === 200) {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
    } else if (res.status === 201) {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
    } else {
      dispatch({
        type: USER_LOGIN,
        payload: [],
      });
    }
  } catch (error) {
    console.log('error in login', error);
  }
};
export const OtpVerify = () => async dispatch => {
  try {
    dispatch({
      type: OTP_VERIFY,
      action: [],
    });
  } catch (error) {}
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
  console.log('+++++++++++++++++++++', params);
  try {
    const res = await apiCall('post', apiEndPoints.LANGUAGEPOST, params);
    console.log('Add Lang Res ------> ', res.data);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: LANGUAGE_ADD,
        payload: res,
      });
    }
  } catch (error) {
    console.log('error in add lang', error);
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

export const userLogout = () => async dispach => {
  try {
    await AsyncStorage.clear();
    dispach({
      type: USER_LOGOUT,
      payload: null,
    });
  } catch (error) {}
};
export const removeAuthState = () => async dispach => {
  try {
    dispach({
      type: REMOVE_AUTH,
      payload: null,
    });
  } catch (error) {}
};
