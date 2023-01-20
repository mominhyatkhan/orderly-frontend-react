import { createSlice } from "@reduxjs/toolkit";
export interface chainToken 
{

  state: boolean,
  tableState:boolean,
  name:string,
  symbol: string,
  address:string,
  nativeValue: number,
  totalTokenValue: number,
  tokenlist:string[],
  

}[];
const initialState: chainToken[]=[
  {
      state: true, 
      name:"",
      symbol: "",
      tableState:true, 
      address:'',
      nativeValue: 0, 
      totalTokenValue: 0,
      tokenlist:[],
        },
 ];
export const tokenSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addWallet: (state, action) => {
      state.push(action.payload);
      console.log("this is token:", action.payload);
    },
    
  },
});
export const {
  addWallet,
} = tokenSlice.actions;

export default tokenSlice.reducer;
