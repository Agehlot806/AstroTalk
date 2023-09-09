import axios from 'axios';
import {apiCall} from '../../Utils/httpClient';
import apiEndPoints from '../../Utils/apiEndPoints';
import {LANGUAGE_GET} from '../Types';

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
