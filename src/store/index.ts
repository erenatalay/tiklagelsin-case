import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: {
    rootReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      authApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;