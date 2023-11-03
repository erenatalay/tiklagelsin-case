import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../@types/response/Products";
import { ProductSearch } from "../../@types/request/ProductSearch";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductSearch>({
      query: ({search}) => ({
        url: `/products?q=${search}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productsApi;