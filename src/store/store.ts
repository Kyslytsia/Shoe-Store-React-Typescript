import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userSclice from "./user-sclice/userSlice";
import accountSlice from "./account-sclice/accountSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  account: accountSlice,
  users: userSclice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
