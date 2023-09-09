import {LANGUAGE_GET, USER_LOGIN} from '../Types';

const initialState = {
  response: null,
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
    default:
      return state;
  }
};
