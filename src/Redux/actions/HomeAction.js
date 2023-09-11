import apiEndPoints from '../../Utils/apiEndPoints';
import { apiCall } from '../../Utils/httpClient';
import {GET_ASTROLOGERS, HOROSCOPE_CAT, ZODICS_GET} from '../Types';

export const getHoroscopeCategory = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.HOROSCOPCATEGORY);
    console.log('getHoroscopeCategory', res);
    if (res.status === 200) {
      dispatch({
        type: HOROSCOPE_CAT,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error getHoroscopeCategory', error);
  }
};

export const getZodics = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.ZODICS);
    console.log('getZodics', res);
    if (res.status === 200) {
      dispatch({
        type: ZODICS_GET,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getZodics', error);
  }
};
export const getAstrologers = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.ASTROLOGERS);
    console.log('getAstrologers', res);
    if (res.status === 200) {
      dispatch({
        type: GET_ASTROLOGERS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getZodics', error);
  }
};
