import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

export default function SendlerList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: '70vh',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${years[sectionId]}`}>
          <ul>
            <ListSubheader>{`year ${years[sectionId]}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Рассылка ${item} от dd.mm по теме $topic`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
