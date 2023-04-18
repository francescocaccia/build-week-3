import { SET_PROFILE, SET_EXPERIENCE } from "../actions";

const defaultState = {
  content: null,
  experience: [],
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case SET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    default:
      return state;
  }
};
export default profileReducer;
