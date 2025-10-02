// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import Book from './components/Books';
// import Alert from './components/Alert';
import 'modern-normalize';
// import Button from './components/Button';
// import UserMenu from './components/UserMenu';
// src/main.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
