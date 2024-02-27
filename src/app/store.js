import { configureStore } from "@reduxjs/toolkit";

import rootreducers from "./../features/todo/todoSlice";

export const store = configureStore({
  reducer: rootreducers,
});

export default store;
