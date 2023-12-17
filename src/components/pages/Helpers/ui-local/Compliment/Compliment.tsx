import { useGetComplimentQuery } from '../../api/RTKQueryHelpers';

export default function Compliment() {
  const { data } = useGetComplimentQuery(null);

  return (
    <>
      <h4 style={{ margin: 0 }}>Случайный комплимент:</h4>
      <span>{data ? data.text : 'Загружаю'}</span>
    </>
  );
}
