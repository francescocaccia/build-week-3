import { SET_PROFILE } from "../actions";

const defaultState = {
  content: null,
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default profileReducer;
