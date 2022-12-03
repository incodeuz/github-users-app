import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  const res = await fetch("https://api.github.com/users").then((data) =>
    data.json()
  );
  return res;
});

const initialState = {
  data: [],
  loading: false,
  status: "",
};

export const dataSlice = createSlice({
  name: "Api Data",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
      state.status = "loading";
      console.log(state.status);
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
      state.status = "rejected";
      console.log(state.status);
    },
  },
});
export const dataReducer = dataSlice.reducer;
