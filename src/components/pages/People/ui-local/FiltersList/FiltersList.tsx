import style from './FiltersList.module.css';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterDropper from '~/components/ui/FilterDropped/FilterDropped';
import { dataBd, dataColleague, dataCom } from './constants';
import { useAppDispatch, useAppSelector } from '~/lib/hooks/reduxHooks';
import { selectAttributes } from '~/store/slices/attributes';
import { getTitleList } from '~/lib/utils/getTitleList';
import { setSelectedPeople } from '~/store/slices/selectedPeople';
import { selectPeople } from '~/store/slices/people';
import { useNavigate } from 'react-router-dom';

const FiltersList = () => {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector(selectAttributes);
  const people = useAppSelector(selectPeople);
  const navigate = useNavigate();

  const [bdFilters, setBdFilters] = useState<string[]>([]);
  const [comFilters, setComFilters] = useState<string[]>([]);
  const [directionsFilters, setDirectionsFilters] = useState<string[]>([]);
  const [citiesFilters, setCitiesFilters] = useState<string[]>([]);
  const [roleFilters, setRoleFilters] = useState<string[]>([]);
  const [isColleague, setIsColleague] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  // const [gradeFilters, setGradeFilters] = useState<string[]>([]);
  // const [toolsFilters, setToolsFilters] = useState<string[]>([]);

  const resetAllFilters = () => {
    setBdFilters([]);
    setComFilters([]);
    setDirectionsFilters([]);
    setCitiesFilters([]);
    setIsColleague([]);
    setQuery('');
    setRoleFilters([]);
    // setToolsFilters([]);
    // setGradeFilters([]);
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

  const handleSendler = () => {
    dispatch(setSelectedPeople(people));
    navigate('/dev-rel-me/main/sending');
  };

  return (
    <section className={style['container']}>
      <div className={style['container']}>
        <FilterDropper data={dataBd} label="Выбрать базу данных" state={bdFilters} setState={setBdFilters} />
        <FilterDropper data={dataCom} label="Комьюнити" state={comFilters} setState={setComFilters} />
        <FilterDropper
          data={dataColleague}
          label="Это сотрудник компании?"
          state={isColleague}
          setState={setIsColleague}
          multy={false}
        />
        <FilterDropper
          data={getTitleList(attributes.roles)}
          label="Роль на предыдущем мероприятии"
          state={roleFilters}
          setState={setRoleFilters}
          multy={false}
        />
        <FilterDropper
          data={getTitleList(attributes.jobs)}
          label="Направления"
          state={directionsFilters}
          setState={setDirectionsFilters}
        />
        <FilterDropper
          data={getTitleList(attributes.cities)}
          label="Города"
          state={citiesFilters}
          setState={setCitiesFilters}
        />
        <TextField
          label="Фамилия | email | tel | company"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          sx={{ minWidth: '260px' }}
        />
        {/* <FilterDropper data={data} label="Уровни" state={gradeFilters} setState={setGradeFilters} /> */}
        {/* <FilterDropper data={data} label="Инструменты" state={toolsFilters} setState={setToolsFilters} /> */}
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
        <Button variant="contained" sx={{ minHeight: '56px' }} onClick={handleSendler}>
          Рассылка для выборки
        </Button>
      </div>
    </section>
  );
};

export default FiltersList;
