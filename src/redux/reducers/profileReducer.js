import { SET_PROFILE, SET_EXPERIENCE, SET_PROFILE_DETAILS, MY_PROFILE_TRUE } from "../actions";

const defaultState = {
  content: null,
  experience: [],
  profileDetails: null,
  myProfile: false,
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
    case SET_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.payload,
      };
    case MY_PROFILE_TRUE:
      return {
        ...state,
        myProfile: action.payload,
      };

    default:
      return state;
  }
};
export default profileReducer;
