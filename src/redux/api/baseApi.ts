// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Classes"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/users/register`,
          method: "POST",
          body: userData,
        };
      },
    }),
    addUser: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/users`,
          method: "POST",
          body: userData,
        };
      },
      // invalidatesTags: ["Classes"],
    }),
    loginUser: builder.mutation({
      query: ({ userData }) => {
        return {
          url: `/login`,
          method: "POST",
          body: userData,
        };
      },
      // invalidatesTags: ["Classes"],
    }),
    deleteProduct: builder.mutation({
      query: ({ productId }) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Classes"],
    }),
    getClasses: builder.query({
      query: () => `/allClasses`,
      providesTags: ["Classes"],
    }),
  }),
});

export const {
  useDeleteProductMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useAddUserMutation
} = baseApi;
