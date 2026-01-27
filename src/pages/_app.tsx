import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { store } from '@/store';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />

            <div style={{ flex: 1 }}>
              <Component {...pageProps} />
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
