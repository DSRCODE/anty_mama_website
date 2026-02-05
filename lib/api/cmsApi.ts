import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.antymama.com";

export const cmsApi = createApi({
  reducerPath: "cmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  tagTypes: ["CMS"],
  endpoints: (builder) => ({
    getCMSPage: builder.query<any, string>({
      query: (page) => `/api/settings/page/${page}`,
      providesTags: ["CMS"],
    }),
  }),
});

export const { useGetCMSPageQuery } = cmsApi;
