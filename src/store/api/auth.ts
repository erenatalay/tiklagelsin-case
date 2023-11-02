import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders: async (headers, query) => {
      if (localStorage.getItem("token") !== null) {
        headers.set("authorization", "Bearer " + localStorage.getItem("token"));
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateAppointment: builder.mutation<any, any>({
      query: (body) => ({
        url: "/appointment/" + body.id,
        method: "PUT",
        body : {
          status : body.status,
          dateTime : body.dateTime
        },
      }),
    }),
    createAppointment: builder.mutation<any, any>({
      query: (body) => ({
        url: "/appointment",
        method: "POST",
        body,
      }),
    }),
    appointment: builder.query<any, void>({
      query: () => ({
        url: "/appointment",
        method: "GET",
      }),
    }),
  }),
});

export const {useAppointmentQuery} = authApi;