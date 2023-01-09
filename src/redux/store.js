import { configureStore } from "@reduxjs/toolkit";
import movieApi from "./api/apiSlice";
import darkModeReducer from "./darkMode/darkModeSlice";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    darkmode: darkModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
