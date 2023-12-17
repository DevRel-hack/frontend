import TablePeople from '~/components/pages/People/ui-local/TablePeople/TablePeople';
import './People.scss';
import FiltersList from './ui-local/FiltersList/FiltersList';
import { useEffect } from 'react';
import { useGetSpecialistsQuery } from './api/RTKQueryPeople';
import Loader from '~/components/ui/Loader/Loader';
import { useAppDispatch, useAppSelector } from '~/lib/hooks/reduxHooks';
import { setPeople } from '~/store/slices/people';
import { selectAttributes } from '~/store/slices/attributes';

export default function People() {
  const attributes = useAppSelector(selectAttributes);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetSpecialistsQuery(null);

  useEffect(() => {
    if (data) {
      dispatch(setPeople(data));
    } else if (error) {
      alert('Ошибка при получении специалистов');
    }
  }, [data, error, isLoading, dispatch]);
  return Object.keys(attributes).length ? (
    <div className="people">
      <FiltersList />
      {isLoading ? <Loader /> : <TablePeople />}
    </div>
  ) : (
    <Loader />
  );
}
