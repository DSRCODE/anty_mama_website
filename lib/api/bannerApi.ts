import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.antymama.com/";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl, // ✅ Full external URL
  }),
  tagTypes: ["Banner"],
  endpoints: (builder) => ({
    getBanners: builder.query<any[], void>({
      query: () => "api/banners", // ✅ Just endpoint path
      providesTags: ["Banner"],
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
