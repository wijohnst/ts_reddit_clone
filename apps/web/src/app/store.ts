import { configureStore } from '@reduxjs/toolkit';
import displaySuggestionsReducer from '../features/TrendingItemSuggestion/DisplaySuggestionsSlice';

export const store = configureStore({
  reducer: {
    displaySuggestions: displaySuggestionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
