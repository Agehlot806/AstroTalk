import {
  LANGUAGE_ADD,
  LANGUAGE_GET,
  OTP_VERIFY,
  PROFILE_ADD,
  REMOVE_AUTH,
  USER_LOGIN,
  USER_LOGOUT,
} from '../Types';

const initialState = {
  response: null,
  CreateRes: null,
  userData: null,
  authToken: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        response: action.payload,
        userData: action.payload,
      };
    case OTP_VERIFY:
      return {
        ...state,
        authToken: true,
      };
    case LANGUAGE_GET:
      return {
        ...state,
        response: action.payload,
      };
    case LANGUAGE_ADD:
      return {
        ...state,
        CreateRes: action.payload,
      };
    case PROFILE_ADD:
      return {
        ...state,
        CreateRes: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        response: action.payload,
        CreateRes: action.payload,
        userData: action.payload,
        authToken: false,
      };
    case REMOVE_AUTH:
      return {
        ...state,
        CreateRes: action.payload,
      };
    default:
      return state;
  }
};
