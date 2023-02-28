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
  chain: string;
  isemail: boolean;
  istelegram: boolean;
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
  name: "walletTokens",
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
        if (data.name == "all") {
          item.state = data.ischainSelected;
        } else {
          if (item.name === data.name) {
            console.log(data.name, "=", item.name);
            item.state = data.ischainSelected;
          }
        }
      });
    },
    setemailNotification: (state, action) => {
      let data = action.payload;
      console.log("im data", data);
      state.wallet.map((item) => {
        if (
          item.chainAddress === data.chainAddress &&
          item.chain === data.name
        ) {
          console.log("im email", data.isemail);
          item.isemail = data.isemail;
        }
      });
    },
    settelegramNotification: (state, action) => {
      let data = action.payload;
      state.wallet.map((item) => {
        if (
          item.chainAddress === data.chainAddress &&
          item.chain === data.name
        ) {
          console.log("im telegram", data.istelegram);
          item.istelegram = data.istelegram;
        }
      });
    },
    filterWallets: (state, action) => {
      let data = action.payload;
      state.wallet.map((item) => {
        console.log("im chain", item.name);
        if (data.name == "all") {
          item.tableState = data.iswalletSelected;
        } else {
          console.log(item.chainAddress, "=", data.address);
          if (item.chainAddress === data.address) {
            console.log(item.name, "=", data.name);
            if (item.name === data.name) {
              console.log(" idher kyu aya ");
              item.tableState = data.iswalletSelected;
            }
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
  setemailNotification,
  settelegramNotification,
} = tokenSlice.actions;

export default tokenSlice.reducer;
