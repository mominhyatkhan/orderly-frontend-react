import { createSlice } from "@reduxjs/toolkit";
export type Personal = {
  id:string;
  name: string;
  address: string;
};

type Group = {
  name: string;
  members:any[];
};
const initialState = {
  personal: [] as Personal[],
  groups: [] as Group[],
};
export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    addPersonalContact: (state, action) => {
      let data=action.payload.data

      state.personal=data;
      console.log(state.personal,data)
    },
    deletePersonalChain: (state, action) => {
      let data = action.payload;
      let index = state.personal.indexOf(data.name);
      state.personal.splice(index, 1);
    },
    addGroupContact: (state, action) => {
      let data=action.payload.group
      console.log(data)
      state.groups=data;
    },
    addContactInGroup: (state, action) => {
        let data = action.payload;
        console.log('im the data',data)
           state.groups=data
      },
    deleteContactInGroup: (state, action) => {
      let data = action.payload;
      state.groups.map((group) => {
        if (group.name == data.name) {
          let indexToDelete = group.members.indexOf(data.memberName);
          if (indexToDelete !== -1) {
            group.members.splice(indexToDelete, 1);
          }
        }
      });
    },
  },
});
export const {
  addPersonalContact,
  deletePersonalChain,
  addGroupContact,
  addContactInGroup,
  deleteContactInGroup,
} = contactSlice.actions;

export default contactSlice.reducer;
