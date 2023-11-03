import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart } from "../../@types/response/Cart";
import cartDataSlice from "../slice/cartDataSlice";
import mainDataSlice from "../slice/mainDataSlice";


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
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const total = result.data.reduce((acc, item) => {
            return acc + item.quantity * item.price;
          }, 0)
          const length = result.data?.length
          dispatch(cartDataSlice.setCount(length))
          dispatch(cartDataSlice.setTotal(total))
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addCart: builder.mutation<Cart[], Cart>({
      query: (cart) => ({
        url: `/cart`,
        method: "POST",
        body: cart
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(
            cartApi.endpoints.getCart.initiate(undefined, {
              forceRefetch: true,
            })
          )
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateCart: builder.mutation<Cart[], Cart>({
      query: (cart) => ({
        url: `/cart/${cart.id}`,
        method: "PUT",
        body: cart
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            cartApi.endpoints.getCart.initiate(undefined, {
              forceRefetch: true,
            })
          )
        } catch (err) {
          console.log(err, 'err')
        }
      }
    }),
    deleteCart: builder.mutation<Cart[], Cart>({
      query: (cart) => ({
        url: `/cart/${cart.id}`,
        method: "DELETE",
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(cartDataSlice.decrement())
          dispatch(
            cartApi.endpoints.getCart.initiate(undefined, {
              forceRefetch: true,
            })
          )
        } catch (err) {
          console.log(err, 'err')
        }
      }
    })
  }),
});

export const { useGetCartQuery, useAddCartMutation, useUpdateCartMutation, useDeleteCartMutation } = cartApi;