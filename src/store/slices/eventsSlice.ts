import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '~/lib/hooks/reduxHooks';
import { IEventData } from '~/lib/types/interfaces';

/*const initialState: IEventData[] = [
  {
    id: null,
    comments: '',
    title: '',
    description: '',
    start_at: '',
    is_internal: null,
    form: '',
    place: '',
    url: '',
    status: { id: null, title: '' },
    tags: [{ id: null, title: '' }],
  },
];*/

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
