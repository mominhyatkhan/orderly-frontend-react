import { createSlice } from "@reduxjs/toolkit";
type wallet = {
  address: string;
  chain: string;
  istelegram: boolean;
  isemail: boolean;
  email: string;
};
const initialState = {
  wallets: [] as wallet[],
};
export const walletSlice = createSlice({
  name: "walletTokens",
  initialState,
  reducers: {
    addwalletsfromDb: (state, action) => {
      state.wallets = action.payload;
    },
  },
});
export const { addwalletsfromDb } = walletSlice.actions;;
export default walletSlice.reducer