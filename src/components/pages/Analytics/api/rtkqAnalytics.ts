import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backApi } from '~/lib/constants';
import { IEventData } from '~/lib/types/interfaces';

export const rtkqApiAnalytics = createApi({
  reducerPath: 'rtkqApiEvents',
  baseQuery: fetchBaseQuery({ baseUrl: backApi }),
  endpoints: (builder) => ({
    getAnalyticsById: builder.mutation<IEventData[], null>({
      query: () => 'events/',
    }),
  }),
});

export const { useGetAnalyticsByIdMutation } = rtkqApiAnalytics;
