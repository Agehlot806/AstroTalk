import { BOOK_POOJA, BOOK_POOJA_SLOT, GET_POOJAS, GET_POOJAS_FILTER, GET_POOJA_CATEGORY, GET_POOJA_SLOTS, REMOVE_POOJA } from "../Types";

const initialState = {
    response: null,
    poojas: null,
    bookRes: null,
    slotBook: false,
    poojaBook: false
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
      case BOOK_POOJA_SLOT:
        return {
          ...state,
          bookRes: action.payload,
          slotBook: true
        };
      case BOOK_POOJA:
        return {
          ...state,
          bookRes: action.payload,
          slotBook: false,
          poojaBook: true
        };
      case REMOVE_POOJA:
        return {
          ...state,
          bookRes: action.payload,
          slotBook: false,
          poojaBook: false
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