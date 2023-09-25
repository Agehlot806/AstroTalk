import { BOOK_POOJA, GET_POOJAS, GET_POOJAS_FILTER, GET_POOJA_CATEGORY, GET_POOJA_SLOTS } from "../Types";

const initialState = {
    response: null,
    poojas: null,
    bookRes: null
  };

  export const PoojaReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POOJA_CATEGORY:
        return {
          ...state,
          response: action.payload,
        };
      case GET_POOJAS:
        return {
          ...state,
          poojas: action.payload,
        };
      case GET_POOJAS_FILTER:
        return {
          ...state,
          poojas: action.payload,
        };
      case BOOK_POOJA:
        return {
          ...state,
          bookRes: action.payload,
        };
      case GET_POOJA_SLOTS:
        return {
          ...state,
          response: action.payload,
        };
      default:
        return state;
    }
  };