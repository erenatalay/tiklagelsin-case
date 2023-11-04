import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../@types/response/Products";
import { ProductSearch } from "../../@types/request/ProductSearch";
import { BASE_URL } from "../../constant/ApiConfig";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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