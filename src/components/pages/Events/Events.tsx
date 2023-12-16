import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import ButtonPanel from '~/components/ui/ButtonsPanel/ButtonsPanel';
import Search from '~/components/ui/Search/Search';
import EventCard from './ui/EventCard/EventCard';
import Loader from '~/components/ui/Loader/Loader';
import React from 'react';
import { IEventData } from '~/lib/types/interfaces';
//import { useSelector } from 'react-redux';
//import { useGetEventsQuery } from '~/api/RTKQuery';

export default function Events() {
  //const events = useSelector((store) => store.events);
  //const [getEvents] = useGetEventsQuery();

  const initialState: IEventData[] = [
    {
      id: null,
      comments: '',
      title: '',
      description: '',
      start_at: '',
      is_internal: null,
      form: '',
      place: '',
      url: '',
      status: { id: null, title: '' },
      tags: [{ id: null, title: '' }],
    },
  ];
  const [events, setEvents] = React.useState(initialState);

  //const selectedVacancy = useSelector((store) => store.selectedVacancy);
  //const dispatch = useDispatch();
  //const { data: dataVacancies } = useGetVacanciesQuery(null);
  //const [getVacanciesToId, { data: dataVacanciToId }] = useGetVacanciToIdMutation();

  const [eventPage, setEventPage] = useState('активные');
  //const [titleVacancy, setTitleVacancy] = useState('');
  //const isArchivePage = eventPage === 'в архиве';

  /*const handleClickVacancy = (id: string, title: string) => {
    if (!isArchivePage) {
      void getVacanciesToId(id);
      // несмотря на то, что мы меняем стейт независимо от ответа сервера, отражаться заголовок будет только когда данные будут получены и при том успешно
      setTitleVacancy(title);
    }
  };

  const handleChangeStatus = (data: IVacanci) => {
    dispatch(setNewStatusToId(data));
  };

  React.useEffect(() => {
    if (dataVacancies) {
      dispatch(setVacancies(dataVacancies));
    }
  }, [dataVacancies, dispatch]);

  React.useEffect(() => {
    if (dataVacanciToId) {
      dispatch(setSelectedVacancy(dataVacanciToId));
    }
  }, [dataVacanciToId, dispatch]);*/

  async function getEvents() {
    const events = await fetch('https://a8a70fb723a.vps.myjino.ru/api/v1/events').then((res) => res.json());
    setEvents([...events]);
  }

  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Typography variant="h3" sx={{ alignSelf: 'start', paddingBottom: 4 }}>
        Мои мероприятия
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Search />
          <ButtonPanel state={eventPage} setState={setEventPage} />
        </Box>
        <Button variant="contained">Создать мероприятие</Button>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', pt: 6 }}>
        {events ? (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {events.map((data) => (
              <li key={data.id} onClick={() => console.log(data.id, data.title)}>
                <EventCard eventData={data} />
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
}
