import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import eventPoster from '~/assets/photo_2023-12-17 01.21.12.jpeg';
import { IEventData } from '~/lib/types/interfaces';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ eventData }: { eventData: IEventData }) {
  const navigate = useNavigate();
  const { title, description } = eventData;
  return (
    <Card sx={{ maxWidth: 345, height: 460 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={eventPoster} alt="event poster" sx={{ objectFit: 'contain' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ height: 70 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ height: '160px', overflow: 'auto' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" startIcon={<EventNoteOutlinedIcon />} title="Заявлено">
          89
        </Button>
        <Button size="small" color="primary" startIcon={<PersonOutlineOutlinedIcon />} title="Фактически">
          54
        </Button>
        <Button size="small" color="primary" startIcon={<SignalCellularAltOutlinedIcon />} title="Конверсия">
          60%
        </Button>
        <Button size="small" color="primary" sx={{ fontSize: 10 }} onClick={() => navigate('/devRelMe/main/analytics')}>
          Вся аналитика
        </Button>
      </CardActions>
    </Card>
  );
}
