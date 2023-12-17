import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Yandex Sans Text', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
