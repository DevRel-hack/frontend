import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface IButtonPanel {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonPanel: React.FC<IButtonPanel> = ({ state, setState }: IButtonPanel) => {
  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setState(newAlignment);
  };
  return (
    <ToggleButtonGroup color="primary" value={state} onChange={handleChange} exclusive>
      <ToggleButton value="предстоящие" sx={{ textTransform: 'none' }}>
        Предстоящие
      </ToggleButton>
      <ToggleButton value="активные" sx={{ textTransform: 'none' }}>
        Активные
      </ToggleButton>
      <ToggleButton value="прошедшие" sx={{ textTransform: 'none' }}>
        Прошедшие
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ButtonPanel;
