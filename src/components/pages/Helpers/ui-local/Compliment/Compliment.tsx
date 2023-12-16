import { useGetComplimentQuery } from '../../api/RTKQuery';

export default function Compliment() {
  const { data } = useGetComplimentQuery(null);

  return (
    <>
      <h4 style={{ margin: 0 }}>Случайный комплимент:</h4>
      <span>{data ? data.text : 'Загружаю'}</span>
    </>
  );
}
