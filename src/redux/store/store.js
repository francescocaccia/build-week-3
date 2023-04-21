import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";
import jobsReducer from "../reducers/jobsReducer";
import spinnerReducer from "../reducers/spinnerReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  jobs: jobsReducer,
  spinner: spinnerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
