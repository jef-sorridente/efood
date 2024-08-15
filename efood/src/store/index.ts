import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type Rootreducer = ReturnType<typeof store.getState>;

export default store;
