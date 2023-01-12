import { createSlice } from "@reduxjs/toolkit";

export interface SignupState {
  signUpState: {
    isSigned: boolean;
    signState: number;
    email:string;
    isAccountCreated:boolean;
  };
}
const initialState: SignupState = {
  signUpState: { isSigned: false, signState: 0 ,email:'mohib@gmail.com',isAccountCreated:false},
};
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupState: (state, action) => {
      state.signUpState = action.payload;
      console.log(state.signUpState);
    },
  },
});

export const { setSignupState } = signupSlice.actions;

export default signupSlice.reducer;
