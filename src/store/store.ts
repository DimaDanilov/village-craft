import { resourcesSlice } from '@features/resources/model';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [resourcesSlice.name]: resourcesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
