import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  status: "",
  inputValue: "",
};

export const userApi = createAsyncThunk("github/usersApi", async function () {
  const response = await fetch(
    `https://api.github.com/users/${initialState.inputValue}`
  );
  const data = await response.json();
  return data;
});

export const dataSlice = createSlice({
  name: "Api Data",
  initialState,
  reducers: {
    searchUser(state, action) {
      state.inputValue = action.payload;
    },
  },
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

export const { searchUser } = dataSlice.actions;

export default dataSlice.reducer;
export const dataReducer = dataSlice.reducer;
