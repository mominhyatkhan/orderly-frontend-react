import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";
import dashboardSlice from "./slices/dashboardSlice";
import loginSlice from "./slices/loginSlice";
import signupSlice from "./slices/signupSlice";
import  tokenSlice  from "./slices/tokenslice";
export const store = configureStore({
  reducer: {
    isLogin: loginSlice,
    signupState: signupSlice,
    coinCards: cardsSlice,
    dashboard:dashboardSlice,
    tokens:tokenSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
