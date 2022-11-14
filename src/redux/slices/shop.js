import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allItems: []
  },
  reducers: {
    setAllItems: (state, action) => {
      state.allItems = action.payload;
    },
  },
});

// this is for dispatch
export const shopActions = shopSlice.actions;

// this is for configureStore
export default shopSlice.reducer;
