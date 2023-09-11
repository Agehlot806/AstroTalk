import {GET_ASTROLOGERS, HOROSCOPE_CAT, ZODICS_GET} from '../Types';

const initialState = {
  response: null,
  ZodicRes: null,
  AstroRes: null
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOROSCOPE_CAT:
      return {
        ...state,
        response: action.payload,
      };
    case ZODICS_GET:
      return {
        ...state,
        ZodicRes: action.payload,
      };
    case GET_ASTROLOGERS:
      return {
        ...state,
        AstroRes: action.payload,
      };
    default:
      return state;
  }
};
