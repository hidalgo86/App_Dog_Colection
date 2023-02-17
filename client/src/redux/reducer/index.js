//acciones para el cambio de estado
import { GET_DOG_All, GET_DOG_API, GET_DOG_DB, GET_DOG_NAME, GET_TEMPERAMENT } from "../types";

// Estado Global inicial de redux
const initialState = {
  dogs: [],
  detail: [],
  temperament: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOG_All:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG_API:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG_DB:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG_NAME:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperament: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
