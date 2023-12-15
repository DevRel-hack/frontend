import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkqApi = createApi({
  reducerPath: 'rtkqApi',
  baseQuery: fetchBaseQuery({ baseUrl: '#' }),
  endpoints: (builder) => ({
    // example
    getRandomFactAboutCat: builder.query<null, null>({
      query: () => 'fact',
    }),
  }),
});

export const { useGetRandomFactAboutCatQuery } = rtkqApi;
