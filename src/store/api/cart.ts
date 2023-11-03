import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../@types/response/Products";

export interface GetProductsParams{
  search: string;
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getCart: builder.query<Product[], GetProductsParams>({
      query: ({search}) => ({
        url: `/products?q=${search}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetCartQuery} = cartApi;