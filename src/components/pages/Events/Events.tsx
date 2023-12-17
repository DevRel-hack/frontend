import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonPanel from '~/components/ui/ButtonsPanel/ButtonsPanel';
import Search from '~/components/ui/Search/Search';
import EventCard from './ui/EventCard/EventCard';
import Loader from '~/components/ui/Loader/Loader';
import { useAppDispatch, useAppSelector } from '~/lib/hooks/reduxHooks';
import { useGetEventsQuery } from './api/queryEvents';
import { selectEvents, setEvents } from '~/store/slices/eventsSlice';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const navigate = useNavigate();
  const { data, error } = useGetEventsQuery(null);
  const [eventPage, setEventPage] = useState('активные');

  const events = useAppSelector(selectEvents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setEvents(data));
    } else if (error) {
      alert('Ошибка при получении данных');
    }
  }, [data, error, dispatch]);

  const isButton = (evt: any) => {
    return evt.target.type !== 'button';
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Search />
          <ButtonPanel state={eventPage} setState={setEventPage} />
        </Box>
        <Button variant="contained" onClick={() => navigate('/devRelMe/main/addEvent')}>
          Создать мероприятие
        </Button>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', pt: 6 }}>
        {events.length ? (
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
              <li key={data.id} onClick={(evt) => isButton(evt) && alert(data.id + ' ' + data.title)}>
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
