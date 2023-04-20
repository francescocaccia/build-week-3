import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
