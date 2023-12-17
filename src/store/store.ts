import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkqApiHelpers } from '~/components/pages/Helpers/api/RTKQueryHelpers';
import { rtkqApiPeople } from '~/components/pages/People/api/RTKQueryPeople';
import peopleSlice from './slices/people';
import attributesSlice from './slices/attributes';
import eventsSlice from './slices/eventsSlice';
import selectedPeopleSlice from './slices/selectedPeople';
import { rtkqApiEvents } from '~/components/pages/Events/api/queryEvents';

export const store = configureStore({
  reducer: {
    [rtkqApiHelpers.reducerPath]: rtkqApiHelpers.reducer,
    [rtkqApiPeople.reducerPath]: rtkqApiPeople.reducer,
    [rtkqApiEvents.reducerPath]: rtkqApiEvents.reducer,
    people: peopleSlice,
    events: eventsSlice,
    attributes: attributesSlice,
    selectedPeople: selectedPeopleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(rtkqApiHelpers.middleware)
      .concat(rtkqApiPeople.middleware)
      .concat(rtkqApiEvents.middleware),
});

setupListeners(store.dispatch);
