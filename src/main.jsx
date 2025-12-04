import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import App from './App.jsx';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const theme = createTheme({});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
