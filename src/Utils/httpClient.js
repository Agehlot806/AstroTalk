import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './constant';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/`,
});

export function setDefaultHeader(header, value) {
  httpClient.defaults.headers.common[header] = value;
}

export async function apiCall(
  method,
  url,
  data,
  header = {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  },
) {
  // const { response } = configureStore().store.getState().login;
  // const generatedToken = await AsyncStorage.getItem("token");
  // let headers = {
  //   ...header,
  //   "token": response?.token ? response?.token : generatedToken
  // }
  try {
    const response = await httpClient({
      method,
      url,
      data,
      headers: header,
      // withCredentials: false,
    });
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      return response;
    }
    if (response.status === 202) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return error.response;
      }
      return error.response;
    } else if (error.request) {
      return error.response;
    } else {
    }
    // return error;
    return error.response;
  }
}
