import { createSlice } from "@reduxjs/toolkit";

export interface CardsState 
  { name: string, symbol: string, image: string,addreses:string[] }[];


const initialState: CardsState[] = 
   [
    { name: "Ethereum", symbol: "ETH", image: "/etherum.png", addreses:['0x2F22e6c6195dB2Aa79c79b44DfEa463aD029611A']},
    { name: "Tether", symbol: "USDT", image: "/etherum.png", addreses:['rew32','2rdew']},
    { name: "Cardano", symbol: "ADA ", image: "/etherum.png",addreses:['trds43','ewrwefwe'] },
  ]

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
