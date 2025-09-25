// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Book from './components/Books';
// import Alert from './components/Alert';
import 'modern-normalize';
// import Button from './components/Button';
import UserMenu from './components/UserMenu';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserMenu name="John Doe" />
    <App />
    <Book />
  </React.StrictMode>,
);
