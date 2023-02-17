import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  user: {
    email: string;
    password: string;
    isLogged: boolean;
  };
}

const initialState: LoginState = {
  user: { email: "", password: "", isLogged: false },
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.user = action.payload;
      console.log(state.user, action.payload, "ksskks");
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
      console.log(state.user.email);
    },
  },
});

export const { setLoginState, setEmail } = loginSlice.actions;
export default loginSlice.reducer;
