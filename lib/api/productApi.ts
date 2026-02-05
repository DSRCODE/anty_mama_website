import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.antymama.com";

export type GetProductsParams = {
  brand: "anty-mama" | "nurse-cam";
  deliveryMode?: "physical" | "virtual";
  isActive?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: "createdAt" | "price";
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, GetProductsParams>({
      query: (params) => ({
        url: "/api/products",
        params: {
          sortBy: "createdAt",
          order: "desc",
          page: 1,
          limit: 6,
          ...params,
        },
      }),
      providesTags: ["Product"],
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `api/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
