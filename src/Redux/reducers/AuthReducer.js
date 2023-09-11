import {LANGUAGE_ADD, LANGUAGE_GET, PROFILE_ADD, REMOVE_AUTH, USER_LOGIN} from '../Types';

const initialState = {
  response: null,
  CreateRes: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        response: action.payload,
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
    case REMOVE_AUTH:
      return {
        ...state,
        CreateRes: action.payload,
      };
    default:
      return state;
  }
};
