import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userApi = createAsyncThunk("github/usersApi", async function () {
  const response = await fetch("https://api.github.com/users/incodeuz");
  const data = await response.json();
  return data;
});

const initialState = {
  data: [],
  loading: false,
  status: "",
};

export const dataSlice = createSlice({
  name: "Api Data",
  initialState,
  reducer: {},
  extraReducers: {
    [userApi.pending]: (state) => {
      state.status = "loading...";
    },
    [userApi.fulfilled]: (state, { payload }) => {
      state.status = "resolved";
      state.data = payload;
    },
    [userApi.rejected]: (state) => {
      state.status = "error";
    },
  },
});
export const dataReducer = dataSlice.reducer;
