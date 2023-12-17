import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backApi } from '~/lib/constants';
import { IEventData } from '~/lib/types/interfaces';

export const rtkqApiEvents = createApi({
  reducerPath: 'rtkqApiEvents',
  baseQuery: fetchBaseQuery({ baseUrl: backApi }),
  endpoints: (builder) => ({
    getEvents: builder.query<IEventData[], null>({
      query: () => 'events/',
    }),
  }),
});

export const { useGetEventsQuery } = rtkqApiEvents;
