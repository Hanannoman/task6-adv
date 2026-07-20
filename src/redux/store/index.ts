
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../themeSlice/index";
import blogReducer from "./../blog/index"; 
const store = configureStore({
  reducer: {
    theme: themeReducer,
    blog: blogReducer ,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;