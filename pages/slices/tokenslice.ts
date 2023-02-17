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
  monitorState: boolean;
  name: string;
  symbol: string;
  chainAddress: string;
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
    addWalletDB: (state, action) => {
      state.wallet = action.payload;
      console.log("Done", action.payload);
    },
    filterWalletsChains: (state, action) => {
      let data = action.payload;
      state.wallet.map((item) => {
        if (data == "all") {
          item.state = true;
        } else {
          if (item.name === data) {
            console.log(data, "=", item.name);
            item.state = true;
          } else {
            item.state = false;
          }
        }
      });
    },
    filterWallets: (state, action) => {
      let data = action.payload;
      state.wallet.map((item) => {
        console.log("im chain", item.name);
        if (data.name == "all") {
          item.tableState = true;
        } else {
          console.log(item.chainAddress, "=", data.address);
          if (item.chainAddress === data.address) {
            console.log(item.name, "=", data.name);
            if (item.name === data.name) {
              console.log(" idher kyu aya ");
              item.tableState = true;
            } else {
              item.tableState = false;
            }
          } else {
            item.tableState = false;
          }
        }
      });
    },
    changeMonitoring: (state, action) => {
      let data = action.payload;
      state.wallet.map((item) => {
        if (item.name === data.name) {
          item.monitorState = data.monitor;
        }
      });
    },
  },
});
export const {
  addWallet,
  filterWalletsChains,
  filterWallets,
  addWalletDB,
  changeMonitoring,
} = tokenSlice.actions;

export default tokenSlice.reducer;
