import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
  name: string;
  symbol: string;
  chainId: string;
  ischainSelected: boolean;
  monintorState: boolean;
  isnotification: boolean;
  image: string;
  addreses: string[];
}
[];

//testnet bsc chainid:0x61
//goreli chainid:0x5
//mumbai chainid:0x13881

const initialState: CardsState[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    chainId: "0x1",
    ischainSelected: true,
    monintorState: true,
    isnotification: false,
    image: "/etherum.png",
    addreses: ["0x19692cF317500C8720046D4744B3Af2cC3c6C94C"],
  },
  {
    name: "Binance",
    symbol: "BSC",
    ischainSelected: true,
    monintorState: true,
    isnotification: true,
    chainId: "0x38",
    image: "/etherum.png",
    addreses: ["rew32"],
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    ischainSelected: true,
    monintorState: true,
    isnotification: true,
    chainId: "0x89",
    image: "/etherum.png",
    addreses: ["trds43"],
  },
];

export const cardSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setportfolioMonitor: (state, action) => {
      let data = action.payload;
      state.map((item) => {
        if (data.name == item.name) {
          item.monintorState = data.monitor;
        }
      });
    },
    setMonitorNotification: (state, action) => {
      let data = action.payload;
      console.log(data);
      state.map((item) => {
        if (data.chainId == item.chainId) {
          item.isnotification = data.isnotification;
        }
      });
    },
    setchainselection: (state, action) => {
      let data = action.payload;
      console.log(data);
      state.map((item) => {
        if (data.name == "all") {
          item.ischainSelected = data.ischainSelected;
        } else if (data.name == item.name) {
          item.ischainSelected = data.ischainSelected;
        }
      });
    },
  },
});
export const {
  setportfolioMonitor,
  setMonitorNotification,
  setchainselection,
} = cardSlice.actions;
export default cardSlice.reducer;
