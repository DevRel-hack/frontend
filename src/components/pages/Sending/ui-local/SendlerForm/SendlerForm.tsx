import { Button, TextField } from '@mui/material';

export default function SendlerForm() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h1 className="sending__title">Новая рассылка</h1>
        <TextField id="outlined-basic" label="Тема рассылки" variant="outlined" />
        <div
          style={{
            border: '1px solid grey',
            borderRadius: '7px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => alert('Фича в разработке')}
        >
          <h4 style={{ margin: 0 }}>В перспективе, сюда перетаскиваем вложения к рассылке</h4>
        </div>
      </div>
      <div style={{ flexGrow: 4, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            onClick={() =>
              alert('А теперь данные вжух и отправляются на бэкенд, который и будет заниматься рассылкой.')
            }
          >
            Отправить
          </Button>
        </div>
        <TextField
          id="outlined-basic"
          label="Текст письма"
          variant="outlined"
          multiline
          rows={7}
          sx={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
