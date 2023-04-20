import { GET_JOB } from "../actions";

const defaultState = {
  content: null,
};

const jobsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default jobsReducer;
