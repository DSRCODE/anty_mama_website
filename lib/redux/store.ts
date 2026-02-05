import { configureStore } from "@reduxjs/toolkit";
import { bannerApi } from "../api/bannerApi";
import { cmsApi } from "../api/cmsApi";
import { productApi } from "../api/productApi";

export const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cmsApi.reducerPath]: cmsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      cmsApi.middleware,
      productApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
