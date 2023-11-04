import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart } from "../../@types/response/Cart";
import cartDataSlice from "../slice/cartDataSlice";
import { BASE_URL } from "../../constant/ApiConfig";


export const cartApi = createApi({
  reducerPath: "cartApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
          const length = result.data?.length
          const total = result.data.reduce((acc, item) => {
            if (length > 1) {
              return (acc + item.price * item.quantity * 0.7)
            } else {
              return acc + item.price * item.quantity
            }
          }, 0)
          dispatch(cartDataSlice.setCount(length))
          dispatch(cartDataSlice.setTotal(Number(total.toFixed(2))))
          dispatch(cartDataSlice.setRegularTotal(Number((total / 0.7).toFixed(2))))

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