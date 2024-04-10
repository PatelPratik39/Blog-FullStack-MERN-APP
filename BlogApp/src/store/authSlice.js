import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
    },
    logout: (state, action) => {
        state.status= false;
        state.userData = null;
        }
  }
});
// exporting login and logout actions from authSlice actions.
export const {login ,logout} = authSlice.actions;
export default authSlice.reducer;