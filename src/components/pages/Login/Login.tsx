import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" size="large" color="success" onClick={() => navigate('/dev-rel-me/main')}>
        I am devrel
      </Button>
    </>
  );
};
