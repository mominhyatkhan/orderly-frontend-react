import { createSlice } from "@reduxjs/toolkit";
type Tokenlist = {
  balance: number;
  decimals: number;
  logo: string;
  name: string;
  symbol: string;
  thumbnail: string;
  token_address: string;
};
type ChainToken = {
  state: boolean;
  tableState: boolean;
  name: string;
  symbol: string;
  address: string;
  nativeValue: number;
  totalTokenValue: number;
  tokenlist: Tokenlist[];
};
const initialState = {
  wallet: [] as ChainToken[],
};
export const tokenSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addWallet: (state, action) => {
      state.wallet.push(action.payload);
      console.log("this is wallet:", action.payload);
      console.log("this is all wallets:", state.wallet);
      return state;
    },
  },
});
export const { addWallet } = tokenSlice.actions;
  
export default tokenSlice.reducer;
