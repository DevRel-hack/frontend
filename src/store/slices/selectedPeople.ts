import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '~/lib/hooks/reduxHooks';
import { IPeople } from './people';

const initialState = [] as IPeople[];

export const selectedPeopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setSelectedPeople: (_, action: PayloadAction<IPeople[]>) => {
      return action.payload;
    },
  },
});

export const { setSelectedPeople } = selectedPeopleSlice.actions;
export const selectSelectedPeople = (state: TRootState) => state.selectedPeople;
export default selectedPeopleSlice.reducer;
