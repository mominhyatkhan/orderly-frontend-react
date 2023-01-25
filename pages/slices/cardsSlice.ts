import { createSlice } from "@reduxjs/toolkit";
import Cards from "../components/portfolioMonitor/cards";

export interface CardsState {
  name: string;
  symbol: string;
  chainId:string;
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
    chainId:"0x1",
    image: "/etherum.png",
    addreses: ["0x19692cF317500C8720046D4744B3Af2cC3c6C94C"],
  
  },
  {
    name: "Binance",
    symbol: "BSC",
    chainId:"0x38",
    image: "/etherum.png",
    addreses: ["rew32"],
  
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    chainId:"0x89",
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
