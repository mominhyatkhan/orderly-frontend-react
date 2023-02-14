import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";
import contactSlice from "./slices/contactSlice";
import dashboardSlice from "./slices/dashboardSlice";
import investmentSlice from "./slices/investmentSlice";
import loginSlice from "./slices/loginSlice";
import signupSlice from "./slices/signupSlice";
import tokenSlice from "./slices/tokenslice";

export const store = configureStore({
  reducer: {
    isLogin: loginSlice,
    signupState: signupSlice,
    coinCards: cardsSlice,
    dashboard: dashboardSlice,
    tokens: tokenSlice,
    investment: investmentSlice,
    contact: contactSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
