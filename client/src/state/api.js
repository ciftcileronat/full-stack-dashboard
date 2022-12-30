import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Users", " User", "Products"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "general/users",
      providesTags: ["Users"],
    }),
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useGetProductsQuery } = api;
