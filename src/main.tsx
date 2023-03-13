import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { MainApp } from './components/useContext/MainApp';
import { HookApp } from './HookApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/useContext/ErrorPage';
import Root from './components/useContext/Root';
import { AboutScreen } from './components/useContext/AboutScreen';
import { LoginScreen } from './components/useContext/LoginScreen';
import { HomeScreen } from './components/useContext/HomeScreen';
import { NavBar } from './components/useContext/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/about',
        element: <AboutScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
