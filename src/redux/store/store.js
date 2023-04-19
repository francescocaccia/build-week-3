import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
