import { GET_JOB, GET_QUERY_JOB } from "../actions";

const defaultState = {
  content: null,
  queryJobs: [],
};

const jobsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: action.payload,
      };
    case GET_QUERY_JOB:
      return {
        ...state,
        queryJobs: action.payload,
      };

    default:
      return state;
  }
};
export default jobsReducer;
