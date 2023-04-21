import { LOADER_ON, LOADER_OFF, ESPERIENZA_ON, ESPERIENZA_OFF } from "../actions";

const defaultState = {
  content: false,
  spinnerEsperienza: false,
};

const spinnerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        content: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        content: false,
      };
    case ESPERIENZA_ON:
      return {
        ...state,
        spinnerEsperienza: true,
      };
    case ESPERIENZA_OFF:
      return {
        ...state,
        spinnerEsperienza: false,
      };

    default:
      return state;
  }
};
export default spinnerReducer;
