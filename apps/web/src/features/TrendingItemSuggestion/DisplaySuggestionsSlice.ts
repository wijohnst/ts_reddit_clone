import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface displaySuggestionsState {
  isDisplayed: boolean;
}

const initialState: displaySuggestionsState = {
  isDisplayed: false,
};

export const displaySuggestionsSlice = createSlice({
  name: 'display-suggestions',
  initialState,
  reducers: {
    isDisplayed: (state, action: PayloadAction<boolean>) => {
      state.isDisplayed = action.payload;
    },
  },
});

export const { isDisplayed } = displaySuggestionsSlice.actions;

export const selectDisplaySuggestions = (state: RootState) =>
  state.displaySuggestions.isDisplayed;

export default displaySuggestionsSlice.reducer;
