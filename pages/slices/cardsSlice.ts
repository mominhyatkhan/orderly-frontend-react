import { createSlice } from "@reduxjs/toolkit";

export interface CardsState 
  { name: string, symbol: string, image: string }[];


const initialState: CardsState[] = 
   [
    { name: "Etherum", symbol: "ETH", image: "/etherum.png" },
    { name: "Etherum", symbol: "ETH", image: "/etherum.png" },
    { name: "Etherum", symbol: "ETH", image: "/etherum.png" },
  ]

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
