import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../@types/response/User";
import { LoginRequest } from "../../@types/request/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authDataSlice from "../slice/authDataSlice";
import mainDataSlice from "../slice/mainDataSlice";
import { BASE_URL } from "../../constant/ApiConfig";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User[], LoginRequest>({
      query: ({ email, password }) => ({
        url: `/users?email=${email.toLocaleLowerCase()}&password=${password}`,
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.length === 0) {
            dispatch(authDataSlice.loginSucceed(false))
            dispatch(mainDataSlice.error("Email yada şifre hatalı"))
            return
          }
          
          const user = result.data[0];
          dispatch(authDataSlice.setUser(user))
          dispatch(authDataSlice.loginSucceed(true))
          await AsyncStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    authanticate: builder.query<User[], LoginRequest>({
      query: ({ email, password }) => ({
        url: `/users?email=${email}&password=${password}`,
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.length === 0) {
            authDataSlice.loginSucceed(false)
            return
          }
          const user = result.data[0];
          dispatch(authDataSlice.setUser(user))
          dispatch(authDataSlice.loginSucceed(true))
          await AsyncStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
          console.log(err);
        }
      },
    }),

  }),
});

export const { useLoginMutation } = authApi;