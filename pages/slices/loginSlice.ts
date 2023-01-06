import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  user: {
    email:string,
    password:string,
    isLogged:boolean,
};
}

const initialState: LoginState = {
  user: { email:'',password:'',isLogged:false},
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state,action) => {
      state.user = action.payload;
      console.log(state.user,action.payload, "ksskks")
      if(state.user.email==="mohib@gmail.com" && state.user.password=="imhere"){
        state.user.isLogged=true;
        console.log(state.user.isLogged, "sjksjsks")
      }
    },
  },
});

export const { setLoginState } = loginSlice.actions;

export default loginSlice.reducer;
