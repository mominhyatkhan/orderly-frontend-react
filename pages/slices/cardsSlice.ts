import { createSlice } from "@reduxjs/toolkit";
import Cards from "../components/portfolioMonitor/cards";

export interface CardsState {
  name: string;
  symbol: string;
  image: string;
  addreses: string[];
}
[];

const initialState: CardsState[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "/etherum.png",
    addreses: ["0x19692cF317500C8720046D4744B3Af2cC3c6C94C"],
  
  },
  {
    name: "Tether",
    symbol: "USDT",
    image: "/etherum.png",
    addreses: ["rew32"],
  
  },
  {
    name: "Cardano",
    symbol: "ADA ",
    image: "/etherum.png",
    addreses: ["trds43"],
  
  },
];

export const cardSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});
export default cardSlice.reducer;
