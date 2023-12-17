import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Checkbox, Button } from '@mui/material';

const TodoList = () => {
  const [tasks, setTasks] = useState<{ do: boolean; val: string }[]>([
    { do: false, val: 'Выпить кофе' },
    { do: false, val: 'Узнать случайный факт о котиках' },
    { do: false, val: 'Поработать' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { do: false, val: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '16px',
      }}
    >
      <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Todo</h1>
      <div style={{ display: 'flex', marginBottom: '8px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            flexGrow: 1,
            marginRight: '8px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <Button variant="contained" onClick={addTask}>
          Добавить
        </Button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '30px',
              alignItems: 'center',
              marginBottom: '8px',
              padding: '8px',
            }}
          >
            <Checkbox
              {...{ inputProps: { 'aria-label': `Checkbox ${task.val}` } }}
              onChange={() =>
                setTasks((curTasks) => curTasks.map((val, i) => (i === index ? { do: !val.do, val: val.val } : val)))
              }
            />
            <span style={{ textDecoration: task.do ? 'line-through' : '', overflowX: 'auto' }}>{task.val}</span>
            <IconButton onClick={() => setTasks(() => tasks.filter((_, i) => i !== index))}>
              <CloseIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
