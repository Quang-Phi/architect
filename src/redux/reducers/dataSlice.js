import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../services/axios";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await myAxios.get("/architect");
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;
