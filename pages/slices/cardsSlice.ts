import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
  cards: {name: string, symbol: string};
}

const initialState: CardsState = {
  cards: 
    { name: "Etherum" , 
     symbol: "ETH" ,
 }
,
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
