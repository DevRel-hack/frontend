import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import eventPoster from '~/assets/photo_2023-12-17 01.21.12.jpeg';

/*interface IEventData {
  title: string;
  description: string;
  id: string;
  start_at: string;
  is_internal: boolean;
  form: string;
  place: string;
  url: string;
}*/

export default function EventCard(eventData: any) {
  const { title, description } = eventData;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={eventPoster} alt="event poster" sx={{ objectFit: 'contain' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || 'No data'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || 'No data'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
