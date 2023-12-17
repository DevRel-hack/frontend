import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '~/lib/hooks/reduxHooks';
import { IEventData } from '~/lib/types/interfaces';

const initialState = [] as IEventData[];

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (_, action: PayloadAction<IEventData[]>) => {
      return action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;
export const selectEvents = (state: TRootState) => state.events;
export default eventsSlice.reducer;
