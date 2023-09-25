import apiEndPoints from '../../Utils/apiEndPoints';
import {apiCall} from '../../Utils/httpClient';
import {
  BOOK_POOJA,
  GET_POOJAS,
  GET_POOJAS_FILTER,
  GET_POOJA_CATEGORY,
  GET_POOJA_SLOTS,
} from '../Types';

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
export const getByPoojaCategory = id => async dispatch => {
  try {
    const res = await apiCall('get', `${apiEndPoints.POOJA_FILTER}${id}`);
    console.log('getByPoojaCategory', res);
    if (res.status === 200) {
      dispatch({
        type: GET_POOJAS_FILTER,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getByPoojaCategory', error);
  }
};
export const getByPoojaSlots = () => async dispatch => {
  try {
    const res = await apiCall('get', apiEndPoints.POOJA_SLOTS);
    console.log('getByPoojaSlots', res);
    if (res.status === 200) {
      dispatch({
        type: GET_POOJA_SLOTS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in getByPoojaSlots', error);
  }
};
export const bookPoojaSlot = params => async dispatch => {
  try {
    const res = await apiCall('post', apiEndPoints.BOOKPOOJA, params);
    console.log('bookPoojaSlot', res);
    if (res.status === 200) {
      dispatch({
        type: BOOK_POOJA,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in bookPoojaSlot', error);
  }
};
export const poojaPayment = params => async dispatch => {
  try {
    const res = await apiCall('post', apiEndPoints.POOJAPAYMENT, params);
    console.log('poojaPayment', res);
    if (res.status === 200) {
      dispatch({
        type: BOOK_POOJA,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error in poojaPayment', error);
  }
};
