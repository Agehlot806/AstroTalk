import {GET_ASTROLOGERS, GET_PRODUCT, HOROSCOPE_CAT, ZODICS_GET} from '../Types';

const initialState = {
  response: null,
  ZodicRes: null,
  AstroRes: null,
  ProductRes: null
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
    case GET_PRODUCT:
      return {
        ...state,
        ProductRes: action.payload,
      };
    default:
      return state;
  }
};
