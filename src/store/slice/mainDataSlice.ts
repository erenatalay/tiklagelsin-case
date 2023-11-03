import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/response/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IMainDataSlice {
  error : boolean,
  message : string,
  success : boolean
  toast : boolean
}
const initialState: IMainDataSlice = {
    error : false,
    message : '',
    success : false,
    toast : false
};

const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    success: (state, action : PayloadAction<string>) => {
        state.success = true;
        state.message = action.payload;
        state.toast = true;
    },
    error: (state, action : PayloadAction<string>) => {
        state.error = true;
        state.message = action.payload;
        state.toast = true;
    },
    clear: (state) => {
        state.error = false;
        state.message = "";
        state.success = false;
        state.toast = false;
    }
  },
});



export default {
    ...slice.actions,
  reducer: slice.reducer,
};
