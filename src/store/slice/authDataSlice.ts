import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/response/User";

interface IAuthDataSlice {
  isSignedIn: boolean;
  user : User
}
const initialState: IAuthDataSlice = {
  isSignedIn: false,
  user : {} as User
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSucceed: (state, action : PayloadAction<boolean>) => {
      console.log(action.payload)
      state.isSignedIn = action.payload;
    },
    setUser : (state,action : PayloadAction<User>) => {
      state.user = action.payload
    }
  },
});

export default {
    ...slice.actions,
  reducer: slice.reducer,
};
