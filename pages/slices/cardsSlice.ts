import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
  name: string;
  symbol: string;
  image: string;
  addreses: string[];
  ether:boolean;
  bsc:boolean;
  polygon:boolean;
}
[];

const initialState: CardsState[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "/etherum.png",
    addreses: ["dsada"],
    ether:false,
    bsc:false,
    polygon:false
  },
  {
    name: "Tether",
    symbol: "USDT",
    image: "/etherum.png",
    addreses: ["rew32"],
    ether:false,
    bsc:false,
    polygon:false
  },
  {
    name: "Cardano",
    symbol: "ADA ",
    image: "/etherum.png",
    addreses: ["trds43"],
    ether:false,
    bsc:false,
    polygon:false
  },
];

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTokenState(state, action) {
      
    },
  },
});
export const { setTokenState } = loginSlice.actions;
export default loginSlice.reducer;
