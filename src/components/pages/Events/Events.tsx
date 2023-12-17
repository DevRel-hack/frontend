import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonPanel from '~/components/ui/ButtonsPanel/ButtonsPanel';
import Search from '~/components/ui/Search/Search';
import EventCard from './ui/EventCard/EventCard';
import Loader from '~/components/ui/Loader/Loader';
import { TRootState, useAppDispatch, useAppSelector } from '~/lib/hooks/reduxHooks';
import { useGetEventsQuery } from './api/queryEvents';
import { setEvents } from '~/store/slices/eventsSlice';

export default function Events() {
  const [eventPage, setEventPage] = useState('активные');

  const events = useAppSelector((store: TRootState) => store.events);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetEventsQuery(null);

  useEffect(() => {
    if (data) {
      dispatch(setEvents(data));
    } else if (error) {
      alert('Ошибка при получении данных');
    }
  }, [data, error, isLoading, dispatch]);

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
