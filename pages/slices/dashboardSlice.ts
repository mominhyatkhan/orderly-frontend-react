import { createSlice } from "@reduxjs/toolkit";

export interface DashboardState {
  
    dashboardState:number ;
  
}

const initialState: DashboardState = {dashboardState:0};
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardState: (state, action) => {
        console.log("aya hoon",action.payload);
      state.dashboardState = action.payload;
    },
  },
});

export const { setDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer;