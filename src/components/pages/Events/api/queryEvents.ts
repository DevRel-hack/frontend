import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backApi } from '~/lib/constants';
import { IEventData } from '~/lib/types/interfaces';
import { IAttributes } from '~/store/slices/attributes';

export const rtkqApiEvents = createApi({
  reducerPath: 'rtkqApiPeople',
  baseQuery: fetchBaseQuery({ baseUrl: backApi }),
  endpoints: (builder) => ({
    getEvents: builder.query<IEventData, null>({
      query: () => 'events/',
    }),
    getAttributes: builder.query<IAttributes, null>({
      query: () => 'attributes',
    }),
  }),
});

export const { useGetEventsQuery } = rtkqApiEvents;
