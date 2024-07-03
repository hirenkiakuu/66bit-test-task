import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Employees/Layout.tsx';
import Employee from './pages/Employee/Employee.tsx';
import Employees from './pages/Employees/Employess.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Employees />,
      },
      {
        path: '/employee/:id',
        element: <Employee />,
      },
    ],
  },
  {
    path: '*',
    element: <>Ошибка!</>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
