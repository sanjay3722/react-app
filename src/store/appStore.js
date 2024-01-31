import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./appStore.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
