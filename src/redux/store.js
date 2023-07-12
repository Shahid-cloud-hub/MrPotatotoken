import { configureStore } from "@reduxjs/toolkit";

import walletConnect from "./walletConnect/walletConnectSlice";
import cartSlice from "./cart/cartSlice";
import googleConnectSlice from "./GoogleConnect/googleConnectSlice";

//Other configs
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  //Wallet
  wallet: walletConnect,
  // cart
  cart: cartSlice,
  // Google Connect User
  googleConnect: googleConnectSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
