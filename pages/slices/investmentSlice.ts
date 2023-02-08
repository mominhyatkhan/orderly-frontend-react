import { createSlice } from "@reduxjs/toolkit";
type Investment={
    chain:string,
    amountInvested:number,
    investmentTrasactionLink:string,
    lockup:number;
    percentOfToken:number,
    vestingPeriod:string,
    investmentType:string,
    investerAddress:[],
    SAFTfile:File,
    website:string,
}
const initialState = {
    investment:[] as Investment[],
  };
export const investmentSlice = createSlice({
    name: "investmentSlice",
    initialState,
    reducers: {
     addInvestment:(state,action)=>{
      state.investment=action.payload()
     }
    },
  });
  export const { addInvestment } =
    investmentSlice.actions;
  
  export default investmentSlice.reducer;
  