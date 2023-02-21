import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/lib/storage";

import getUserProfileAPIReducer from "../reducers/getUserProfileAPIReducer";
import getSpecificProfileReducer from "../reducers/getSpecificProfileReducer";
import allProfileReducer from "../reducers/allProfileReducer";
import searchReducer from "../reducers/searchReducer";
import getExperienceReducer from "../reducers/getExperienceReducer";
import getExperienceWithExpIdReducer from "../reducers/getExperienceWithExpId";
import deleteExperienceReducer from "../reducers/deleteExperienceReducer";

const persistConfig = {
  storage: localStorage,
  key: "root", // this brings the whole redux store into persistency
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  profileSearch: getSpecificProfileReducer,
  profile: allProfileReducer,
  search: searchReducer,
  userDataAPI: getUserProfileAPIReducer,
  getExperience: getExperienceReducer,
  deleteExp: deleteExperienceReducer,
  experienceWithId: getExperienceWithExpIdReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
