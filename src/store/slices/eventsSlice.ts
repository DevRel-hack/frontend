import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEventData } from '~/lib/types/interfaces';

const initialState: IEventData[] = [
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
];

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEventData[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
