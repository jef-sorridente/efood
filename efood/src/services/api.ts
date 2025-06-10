import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurantes } from "../Pages/Home";


type Product = {
  id: number,
  price: number
}

type PurchasePayload = {
  billing: {
    name: string
  },
  delivery: {
    address: string,
    city: string,
    cep: string,
    houseNumber: string,
    complement: string,
  },
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        expiresMonth: number,
        expiresYear: number,
      }
    }
  },
  products: Product[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => "restaurantes",
    }),
    getPratos: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  }),
});

export const { useGetRestaurantesQuery, useGetPratosQuery, usePurchaseMutation } = api;

export default api;
