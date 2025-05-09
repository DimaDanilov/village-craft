import { instrumentsSlice } from '@features/instruments/model';
import { resourcesSlice } from '@features/resources/model';
import { configureStore } from '@reduxjs/toolkit';
import type { Action, ThunkAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [instrumentsSlice.name]: instrumentsSlice.reducer,
    [resourcesSlice.name]: resourcesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
