import { createSlice } from "@reduxjs/toolkit";

export interface CardsState 
  { name: string, symbol: string, image: string,addreses:string[] }[];


const initialState: CardsState[] = 
   [
    { name: "Etherum", symbol: "ETH", image: "/etherum.png", addreses:['sadasfsafdasad','sfasadasda']},
    { name: "Tether", symbol: "USDT", image: "/etherum.png", addreses:['rew32','2rdew']},
    { name: "Cardano", symbol: "ADA ", image: "/etherum.png",addreses:['trds43','ewrwefwe'] },
  ]

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
