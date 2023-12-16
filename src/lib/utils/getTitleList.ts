import { IDataList } from '~/store/slices/attributes';

export const getTitleList = (ar: IDataList[]) => {
  return ar.map((obj) => obj.title);
};
