import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myTeam: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: () => ({
        url: "/user/my-team",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    allUser: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (arg: Record<string, any>) => ({
        url: "/user/",
        method: "GET",
        params: arg,
      }),
      providesTags: ["user"],
    }),

    userDetails: build.query({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useMyTeamQuery,
  useAllUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUserDetailsQuery,
} = userApi;
