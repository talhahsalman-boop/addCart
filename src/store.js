import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import cartReducer from "./features/CartSlice";
import { persistStore, persistReducer } from "redux-persist";

// ✅ Custom storage fix
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],

};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
