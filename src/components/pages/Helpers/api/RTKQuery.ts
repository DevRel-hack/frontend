import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IgetCatRes {
  fact: string;
  length: number;
}

interface IgetCompliment {
  method: string;
  text: string;
}

export const rtkqApi = createApi({
  reducerPath: 'rtkqApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    // example
    getRandomFactAboutCat: builder.query<IgetCatRes, null>({
      query: () => 'https://catfact.ninja/fact',
    }),
    getCompliment: builder.query<IgetCompliment, null>({
      query: () => 'https://tools-api.robolatoriya.com/compliment&type=3',
    }),
  }),
});

export const { useGetRandomFactAboutCatQuery, useGetComplimentQuery } = rtkqApi;
