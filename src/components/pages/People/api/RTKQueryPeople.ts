import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backApi } from '~/lib/constants';
import { IAttributes } from '~/store/slices/attributes';
import { IPeople } from '~/store/slices/people';

export const rtkqApiPeople = createApi({
  reducerPath: 'rtkqApiPeople',
  baseQuery: fetchBaseQuery({ baseUrl: backApi }),
  endpoints: (builder) => ({
    getSpecialists: builder.query<IPeople[], null>({
      query: () => 'specialists/',
    }),
    getAttributes: builder.query<IAttributes, null>({
      query: () => 'attributes',
    }),
  }),
});

export const { useGetSpecialistsQuery, useGetAttributesQuery } = rtkqApiPeople;
