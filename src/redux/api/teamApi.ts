import { baseApi } from "./baseApi";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    crateTeam: build.mutation({
      query: (data) => ({
        url: `/team`,
        method: "POST",
        data,
      }),

      invalidatesTags: ["team"],
    }),
    deleteTeam: build.mutation({
      query: (id: string) => ({
        url: `/team/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["team"],
    }),
  }),
});

export const { useCrateTeamMutation, useDeleteTeamMutation } = teamApi;
