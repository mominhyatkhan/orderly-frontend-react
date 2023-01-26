import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import signupApi from "../api/hello";
import signup from "../api/hello";

export interface SignupState {
  signUpState: {
    isSigned: boolean;
    signState: number;
    email:string;
    confirmation:boolean;
    password:string;
    role:string;
  };
}
const initialState: SignupState = {
  signUpState: { isSigned: false, signState: 0 ,email:'',confirmation:false,password:'',role:''},
};
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupState: (state, action) => {
      state.signUpState = action.payload;
      const userdata=[{email:state.signUpState.email},{password:state.signUpState.password},{role:state.signUpState.role},{confirmation:state.signUpState.confirmation}]
     /*  const response= signupApi(userdata); */
      console.log(state.signUpState);
    },
  },
});

export const { setSignupState } = signupSlice.actions;

export default signupSlice.reducer;
