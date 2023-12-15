import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkqApi } from '~/api/RTKQuery';
import counterSlice from './slices/example';

export const store = configureStore({
  reducer: {
    [rtkqApi.reducerPath]: rtkqApi.reducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkqApi.middleware),
});

setupListeners(store.dispatch);
