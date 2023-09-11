import { GET_POOJAS, GET_POOJA_CATEGORY } from "../Types";

const initialState = {
    response: null,
    poojas: null,
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
      default:
        return state;
    }
  };