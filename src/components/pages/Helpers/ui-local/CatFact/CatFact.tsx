import { useGetRandomFactAboutCatQuery } from '~/components/pages/Helpers/api/RTKQuery';

export default function CatFact() {
  const { data } = useGetRandomFactAboutCatQuery(null);
  return (
    <>
      <h4 style={{ margin: 0 }}>Факт о котиках:</h4>
      <span>{data ? data.fact : 'Загружаю'}</span>
    </>
  );
}
