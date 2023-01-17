import { createSlice } from "@reduxjs/toolkit";

export interface TokenState {
  tokenState: {
    ether: boolean;
    bnc: boolean;
    polygon:boolean;
   
  };
}
const initialState: TokenState = {
  tokenState: { ether: true, bnc: true ,polygon:false},
};
export const tokenSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setEtherState: (state, action) => {
      state.tokenState.ether = action.payload;
      console.log("this is token:",state.tokenState.ether);
    },
    setBscState: (state, action) => {
        state.tokenState.bnc = action.payload;
        console.log("this is token:",state.tokenState.ether);
      },
      setPolygonState: (state, action) => {
        state.tokenState.polygon = action.payload;
        console.log("this is token:",state.tokenState.ether);
      },
  },
});

export const { setEtherState,setBscState,setPolygonState } = tokenSlice.actions;

export default tokenSlice.reducer;