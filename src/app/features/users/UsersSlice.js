import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), name: "Alex Burcea" },
  { id: nanoid(), name: "Filip Marchis" },
  { id: nanoid(), name: "Mark Goldbridge" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
export const selectAllUsers = (state) => state.users;
