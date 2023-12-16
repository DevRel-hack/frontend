import style from './FiltersList.module.css';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterDropper from '~/components/ui/FilterDropped/FilterDropped';

const FiltersList = () => {
  const dataCom = ['Сообщество 1', 'Сообщество 2', 'Сообщество 3', 'Подгружаются с бэка'];
  const dataBd = ['Внутренняя БД1', 'Внутренняя БД2', 'Внешняя БД1', 'Внешняя БД2', 'Подгружаются с бэка'];
  const data = ['var1', 'var2', 'Подгружаются с бэка'];

  const [bdFilters, setBdFilters] = useState<string[]>([]);
  const [comFilters, setComFilters] = useState<string[]>([]);
  const [directionsFilters, setDirectionsFilters] = useState<string[]>([]);
  const [toolsFilters, setToolsFilters] = useState<string[]>([]);
  const [citiesFilters, setCitiesFilters] = useState<string[]>([]);
  const [gradeFilters, setGradeFilters] = useState<string[]>([]);

  const resetAllFilters = () => {
    setBdFilters([]);
    setComFilters([]);
    setDirectionsFilters([]);
    setToolsFilters([]);
    setCitiesFilters([]);
    setGradeFilters([]);
  };

  useEffect(() => {
    if (bdFilters.length || comFilters.length) {
      alert(
        'Позволяет сортировать по базе данных или комьюнити, к которой человек принадлежит. На текущем этапе носят демонстративный характер',
      );
    }
  }, [bdFilters, comFilters]);

  // const handleSubmitClick = () => {
  //   console.log('Форма не ушла, но кнопка сработала');
  // };

  return (
    <section className={style['container']}>
      <div className={style['container']}>
        <FilterDropper data={dataBd} label="Выбрать базу данных" state={bdFilters} setState={setBdFilters} />
        <FilterDropper data={dataCom} label="Компьюнити" state={comFilters} setState={setComFilters} />
        <FilterDropper data={data} label="Направления" state={directionsFilters} setState={setDirectionsFilters} />
        <FilterDropper data={data} label="Инструменты" state={toolsFilters} setState={setToolsFilters} />
        <FilterDropper data={data} label="Города" state={citiesFilters} setState={setCitiesFilters} />
        <FilterDropper data={data} label="Уровни" state={gradeFilters} setState={setGradeFilters} />
      </div>

      <div className={style['container']}>
        <Button variant="contained" sx={{ minHeight: '56px' }} onClick={resetAllFilters}>
          Cбросить фильтры
        </Button>
        <Button
          variant="contained"
          sx={{ minHeight: '56px' }}
          onClick={() => alert('Уходит запрос на бэк и возвращает отфильтр. пользователей')}
        >
          Применить фильтры
        </Button>
        <Button
          variant="contained"
          sx={{ minHeight: '56px' }}
          onClick={() => alert('Когда - нибудь здесь будет выгружаться Excel')}
        >
          Выгрузить выборку
        </Button>
        <Button
          variant="contained"
          sx={{ minHeight: '56px' }}
          onClick={() => alert('Когда-нибудь будет всплывать менюшка для загрузки файла')}
        >
          Использовать файл как источник
        </Button>
        <Button
          variant="contained"
          sx={{ minHeight: '56px' }}
          onClick={() => alert('Перенаправить на окно создания рассылки, с текущей выборкой участников')}
        >
          Рассылка для выборки
        </Button>
      </div>
    </section>
  );
};

export default FiltersList;
