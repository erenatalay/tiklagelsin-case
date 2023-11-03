import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart } from "../../@types/response/Cart";


export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getCart: builder.query<Cart[], void>({
      query: () => ({
        url: `/cart`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetCartQuery} = cartApi;