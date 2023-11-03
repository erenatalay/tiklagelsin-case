import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/response/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      state.isSignedIn = action.payload;
    },
    setUser : (state,action : PayloadAction<User>) => {
      state.user = action.payload
    },
    logout : (state) => {
      state.isSignedIn = false
      state.user = {} as User
      AsyncStorage.removeItem('user')
    }
  },
});



export default {
    ...slice.actions,
  reducer: slice.reducer,
};
