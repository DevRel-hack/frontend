import TableCell from '@mui/material/TableCell';
import { Autocomplete, Avatar, TextField, Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IPeople } from '~/store/slices/people';

// IMPORTANT
// нельзя использовать хуки. Библиотека которая рендерит табличку их не поддерживает (цикличная работа => некор. использование хуков)
function RowTableContent(_index: number, row: IPeople) {
  const inputOptions = [
    { label: 'Trainee', id: 0 },
    { label: 'Junior', id: 1 },
    { label: 'Middle', id: 2 },
    { label: 'Senior', id: 3 },
    { label: 'Lead', id: 4 },
  ];

  // TODO парсить сюда приходящее значение + check defVal
  const defVal = inputOptions.find((item: { label: string }) => item.label === row.grade.title) || inputOptions[0];
  const getInputBgColor = (val: string) => {
    // TODO надо бы это вынести на бэк - цвета к статусам
    let color = '';
    switch (val) {
      case 'Lead':
        color = ' #FFF9D3';
        break;
      case 'Senior':
        color = 'rgba(255, 191, 253, 0.87)';
        break;
      case 'Middle':
        color = '#ACCCFF';
        break;
      case 'Junior':
        color = '#C2E5CE';
        break;
      case 'Trainee':
        color = '#FFE1BD';
        break;
    }

    return {
      textAlign: 'left',
      borderRadius: '4px',
      backgroundColor: color,
    };
  };

  const inputValue = { ...defVal };

  return (
    <>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Avatar
            alt={row.first_name + row.last_name}
            src="https://mediabrest.by/system/Cover/images/000/059/736/medium/zhivodera-iz-mozyrya-otpravyat-v-psihiatricheskuyu-bolnitsu_1561616899.jpg"
          />
        </div>
      </TableCell>
      <TableCell>{row.first_name}</TableCell>
      <TableCell>{row.last_name}</TableCell>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* // href={`https://t.me/${row.applicant.telegram.slice(1)}`} */}
          <Link target="_blank">{row.phone}</Link>
          <Link href={`mailto:${row.email}`} target="_blank" style={{ width: 24, height: 24, color: '#B5B5B7' }}>
            <MailOutlineIcon />
          </Link>
        </div>
      </TableCell>
      <TableCell align="center">
        <Autocomplete
          disablePortal
          options={inputOptions}
          value={inputValue}
          // т.к. value - объект, а js не умеет их сравнивать, нужно явно ему объяснить, какие объекты считать равными, т.е. как сопоставлять value & options
          isOptionEqualToValue={(option, value) => option.label === value.label && option.id === value.id}
          renderInput={(str) => <TextField {...str} sx={getInputBgColor(inputValue.label || 'TODO')} />}
          onChange={() => alert('В перспективе вы сможете изменять грейд прямо отсюда')}
        />
      </TableCell>
      <TableCell>{row.city.title}</TableCell>
      <TableCell>{row.job.title}</TableCell>
      <TableCell>{row.is_colleague ? 'Да' : 'Нет'}</TableCell>
    </>
  );
}

export default RowTableContent;
