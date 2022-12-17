import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const fetchedDataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeData(state, action) {
      state.data = action.payload;
    },
  },
});

export default fetchedDataSlice.reducer;
export const { storeData } = fetchedDataSlice.actions;
