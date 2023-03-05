//acciones para el cambio de estado
import { AUTHORIZATION_USER, DETAIL_DOG, EDIT_DOG, FILTER_DOGS, GET_DOG_All, GET_DOG_API, GET_DOG_DB, GET_DOG_NAME, GET_TEMPERAMENT, REMOVE_DOG } from "../types";

// Estado Global inicial de redux
const initialState = {
  dogs: [],
  dogsEdit: [],
  detail: [],
  temperament: [],
  user:{}
};

const rootReducer = (state = initialState, action) => {

  // console.log(action.payload)

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

    case EDIT_DOG:
      return {
        ...state,
        dogsEdit: action.payload,
      };

    case GET_DOG_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case DETAIL_DOG:
      return {
        ...state,
        detail: action.payload,
      };

    case REMOVE_DOG:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperament: action.payload,
      };

    case FILTER_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case AUTHORIZATION_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
