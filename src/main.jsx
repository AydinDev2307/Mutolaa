import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import App from './App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { Container } from 'postcss';

const theme = createTheme({
  components: {
    Container: {
      defaultProps: {
        size: 1320,
      },
    },
  },
});
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
);
