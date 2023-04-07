import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './list_events';
import Registration from './registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './header';
import EventPage from './event_page';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

//все страницы сайта
const router = createBrowserRouter([
  {
    path: '/events',
    element: <App />,
  },
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/event/:id',
    element: <EventPage />,
    loader: ({ params }) => { return params.id }
  },
]);

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();