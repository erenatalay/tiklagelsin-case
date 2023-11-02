import { createSlice } from "@reduxjs/toolkit";

interface IAuthDataSlice {
  isSignedIn: boolean;
}
const initialState: IAuthDataSlice = {
  isSignedIn: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSucceed: (state, action) => {
      state.isSignedIn = true;
    },
    loginFailed: (state, action) => {
      state.isSignedIn = false;
    }
  },
});

export default {
    ...slice.actions,
  reducer: slice.reducer,
};
