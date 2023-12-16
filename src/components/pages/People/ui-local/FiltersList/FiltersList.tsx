import { Button } from '@mui/material';
import FilterDropper from '~/components/ui/FilterDropped/FilterDropped';

const FiltersList = () => {
  const dataCom = ['Сообщество 1', 'Сообщество 2', 'Сообщество 3'];
  const dataBd = ['Внутренняя БД1', 'Внутренняя БД2', 'Внешняя БД1', 'Внешняя БД2'];
  const data = ['var1', 'var2'];

  const reseAllFilters = () => {
    console.log('кнопка сработала');
  };

  const handleSubmitClick = () => {
    console.log('Форма не ушла, но кнопка сработала');
  };

  return (
    <section style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
      <FilterDropper data={dataBd} label="Выбрать базу данных" />
      <FilterDropper data={dataCom} label="Компьюнити" />
      <FilterDropper data={data} label="Направления" />
      <FilterDropper data={data} label="Инструменты" />
      <FilterDropper data={data} label="Города" />
      <FilterDropper data={data} label="Уровни" />

      {/* <FilterDropper data={data} label="Опыт работы" state={experience} setState={setExperience} multy={false} /> */}
      <Button variant="contained" onClick={reseAllFilters}>
        Cбросить фильтры
      </Button>
      <Button variant="contained" onClick={handleSubmitClick}>
        Применить фильтры
      </Button>
    </section>
  );
};

export default FiltersList;
