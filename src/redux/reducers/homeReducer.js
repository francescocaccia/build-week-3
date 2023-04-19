import { GET_POST } from "../actions";

const defaultState = {
  content: [],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
