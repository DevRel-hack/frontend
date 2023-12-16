import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '~/lib/hooks/reduxHooks';

export interface IDataList {
  id: number;
  title: string;
}

export interface IAttributes {
  cities: IDataList[];
  tools: IDataList[];
  jobs: IDataList[];
  grades: IDataList[];
  tags: IDataList[];
  statuses: IDataList[];
  roles: IDataList[];
}

const initialState = {} as IAttributes;

export const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    setAttributes: (_, action: PayloadAction<IAttributes>) => {
      return action.payload;
    },
  },
});

export const { setAttributes } = attributesSlice.actions;
export const selectAttributes = (state: TRootState) => state.attributes;
export default attributesSlice.reducer;
