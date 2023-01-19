import { createSlice } from "@reduxjs/toolkit";
import { ADDRCONFIG } from "dns";
import { access } from "fs";
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
  tableState:boolean,
  name: string,
  image:string,
  nativeValue: number,
  totalTokenValue: number,
  tokenlist:string[]
}[];
const initialState: chainToken[]=[
    {
      state: true, 
      name: "ETHEREUM",
      tableState:true, 
      image:'../../../assets/images/ethereum.svg',
      nativeValue: 0, 
      totalTokenValue: 0,
      tokenlist:[]
      
    },
    {
      state: false,
      tableState:true, 
      name: "BSC", 
      image:'../../../assets/images/binance-logo.svg',
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
    setEtherNative: (state, action) => {
      state[0].nativeValue = action.payload;
      console.log("this is etherNative: ", state[0].nativeValue);
    },
    setBscNative: (state, action) => {
      state[1].nativeValue = action.payload;
      console.log("this is bscNative: ", state[1].nativeValue);
    },
    setEtherTotalToken: (state, action) => {
      state[0].totalTokenValue = action.payload;
      console.log("this is ethertotal: ", state[0].totalTokenValue);
    },
    setBscTotalToken: (state, action) => {
      state[1].totalTokenValue = action.payload;
      console.log("this is bsctotal: ", state[1].totalTokenValue);
    },
    setEtherTokenList:(state, action) => {
      state[0].tokenlist = action.payload;
      console.log("this is etherlist :", state[0].tokenlist);
    },
    setBscTokenList: (state, action) => {
      state[1].tokenlist = action.payload;
      console.log("this is Bsclist:", state[1].tokenlist);
    },
   setEtherTableState:(state,action)=>{
    state[0].tableState=action.payload;
   },
   setBscTableState:(state,action)=>{
    state[1].tableState=action.payload;
   }
  },
});
export const {
  setEtherState,
  setBscState,
  setEtherNative,
  setBscNative,
  setEtherTotalToken,
  setBscTotalToken,
  setEtherTokenList,
  setBscTokenList,
  setBscTableState,
  setEtherTableState
} = tokenSlice.actions;

export default tokenSlice.reducer;
