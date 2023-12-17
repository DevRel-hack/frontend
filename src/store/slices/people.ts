import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '~/lib/hooks/reduxHooks';

interface IDataList {
  id: number;
  title: string;
}

export interface IPeople {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string; //TODO нужно бы поправить регулярку
  is_colleague: boolean;
  city: IDataList;
  job: IDataList;
  grade: IDataList;
  tools: IDataList[];
}

const initialState = [] as IPeople[];

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (_, action: PayloadAction<IPeople[]>) => {
      return action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export const selectPeople = (state: TRootState) => state.people;
export default peopleSlice.reducer;
