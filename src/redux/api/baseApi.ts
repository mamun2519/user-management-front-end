// Need to use the React-specific entry point to import createApi

import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { URL } from "../../constants/common";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({}),
  tagTypes: ["user"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
