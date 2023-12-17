import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from './HeaderOfTable.module.css';

interface ColumnData {
  dataKey: string;
  label: string;
  width: number;
}

const columns: ColumnData[] = [
  {
    width: 50,
    label: 'Аватар',
    dataKey: 'avatar',
  },
  {
    width: 100,
    label: 'Имя',
    dataKey: 'firstName',
  },
  {
    width: 100,
    label: 'Фамилия',
    dataKey: 'lastName',
  },
  {
    width: 120,
    label: 'Контакты',
    dataKey: 'contacts',
  },
  {
    width: 250,
    label: 'Статус приглашения',
    dataKey: 'status',
  },
  {
    width: 100,
    label: 'Город',
    dataKey: 'city',
  },
  {
    width: 100,
    label: 'Направление',
    dataKey: 'direction',
  },
];

function HeaderOfTableOfCandidates() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={'left'}
          style={{ width: column.width }}
          className={styles['table-title']}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default HeaderOfTableOfCandidates;
