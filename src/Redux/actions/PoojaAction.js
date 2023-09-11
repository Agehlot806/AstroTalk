import apiEndPoints from '../../Utils/apiEndPoints';
import {apiCall} from '../../Utils/httpClient';
import {GET_POOJAS, GET_POOJA_CATEGORY} from '../Types';

export const getPoojaCategory = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.POOJA_CATEGORY);
    console.log('getPoojaCategory', res);
    if (res.status === 200) {
      dispatch({
        type: GET_POOJA_CATEGORY,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getPoojaCategory', error);
  }
};
export const getPoojas = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.POOJAS);
    console.log('getPoojas', res);
    if (res.status === 200) {
      dispatch({
        type: GET_POOJAS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getPoojas', error);
  }
};
