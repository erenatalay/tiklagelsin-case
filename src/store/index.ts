import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { productsApi } from "./api/products";
import { cartApi } from "./api/cart";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: {
    rootReducer: rootReducer, 
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    authApi.middleware,
    productsApi.middleware,
    cartApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
