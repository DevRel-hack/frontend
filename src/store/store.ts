import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkqApiHelpers } from '~/components/pages/Helpers/api/RTKQueryHelpers';
import { rtkqApiPeople } from '~/components/pages/People/api/RTKQueryPeople';
import counterSlice from './slices/example';
import peopleSlice from './slices/people';
import attributesSlice from './slices/attributes';
import eventsSlice from './slices/eventsSlice';

export const store = configureStore({
  reducer: {
    [rtkqApiHelpers.reducerPath]: rtkqApiHelpers.reducer,
    [rtkqApiPeople.reducerPath]: rtkqApiPeople.reducer,
    people: peopleSlice,
    events: eventsSlice,
    counter: counterSlice,
    attributes: attributesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkqApiHelpers.middleware).concat(rtkqApiPeople.middleware),
});

setupListeners(store.dispatch);
