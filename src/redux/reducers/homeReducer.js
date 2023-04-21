import { GET_POST, GET_COMMENTI } from "../actions";

const defaultState = {
  content: [],
  commenti: [],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        content: action.payload,
      };
    case GET_COMMENTI:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
