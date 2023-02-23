import { createSlice } from "@reduxjs/toolkit";
import { setpassword, signupMail } from "../api/BackendApi";

export interface SignupState {
  signUpState: {
    isSigned: boolean;
    signState: number;
    email: string;
    confirmation: boolean;
    password: string;
    role: string;
  };
}
const initialState: SignupState = {
  signUpState: {
    isSigned: false,
    signState: 0,
    email: "",
    confirmation: false,
    password: "",
    role: "",
  },
};
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupState: (state, action) => {
      state.signUpState = action.payload;
    },
    setemail: (state) => {
      /* let user=[{email:state.signUpState.email,password:state.signUpState.password,emailVerified:false, role:'user',emailVerification:''}] */
      const response = signupMail(state.signUpState.email);
      console.log("this is response", response);
    },
    setPassword: (state, action) => {
      state.signUpState.password = action.payload;
      setpassword(state.signUpState.password);
    },
  },
});

export const { setSignupState, setemail, setPassword } = signupSlice.actions;

export default signupSlice.reducer;
