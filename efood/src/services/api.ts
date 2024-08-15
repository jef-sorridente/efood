import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurantes } from "../Pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes, void>({
      query: () => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantesQuery } = api;

export default api;
