import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { HookApp } from './HookApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>,
);