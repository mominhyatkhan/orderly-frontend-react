import { createSlice } from "@reduxjs/toolkit";
import { ADDRCONFIG } from "dns";

export interface TokenState {
  tokenState: {
    address: string;
    nativevalue: number;
    totalTokenValue: number;
  };
}
export interface chainToken 
{
  state: boolean,
  name: string,
  nativeValue: number,
  totalTokenValue: number,
  tokenlist:string[]
}[];
const initialState: chainToken[]=[
    {
      state: false, 
      name: "ETHEREUM", 
      nativeValue: 0, 
      totalTokenValue: 0,
      tokenlist:[]
      
    },
    {
      state: false,
      name: "BSC", 
      nativeValue: 0,
      totalTokenValue: 0,
      tokenlist:[]
    }
 ];
export const tokenSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setEtherState: (state, action) => {
      state[0].state = action.payload;
      console.log("this is token:", state[0].state);
    },
    setBscState: (state, action) => {
      state[1].state = action.payload;
      console.log("this is token:", state[1].state);
    },
   /*  setPolygonState: (state, action) => {
      state.chainToken[2] = action.payload;
      console.log("this is token:", state.chainToken[2]);
    }, */
   /*  setAddress: (state, action) => {
      console.log(action.payload);
      state.tokenState.address = action.payload;

      console.log("this is addreses: ", state.tokenState.address);
    },
    setNative: (state, action) => {
      console.log(action.payload);
      state.tokenState.nativevalue = action.payload;

      console.log("this is addreses: ", state.tokenState.nativevalue);
    },
    setTotal: (state, action) => {
      console.log(action.payload);
      state.tokenState.totalTokenValue = action.payload;

      console.log("this is addreses: ", state.tokenState.totalTokenValue);
    }, */
  },
});
export const {
  setEtherState,
  setBscState,
 /*  setPolygonState, */
  /* setAddress,
  setTotal,
  setNative, */
} = tokenSlice.actions;

export default tokenSlice.reducer;
