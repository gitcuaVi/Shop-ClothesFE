import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import sidebarReducer from "./features/sidebarMenuSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar", "auth"],
};

const rootReducer = combineReducers({// khai báo
  sidebar: sidebarReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
