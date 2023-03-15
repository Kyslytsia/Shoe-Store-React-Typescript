import { createSlice } from "@reduxjs/toolkit";
import { shoesData } from "../../shoesData";

const shoesSlice = createSlice({
  name: "shoes",
  initialState: {
    value: shoesData,
  },
  reducers: {},
});

export default shoesSlice.reducer;
