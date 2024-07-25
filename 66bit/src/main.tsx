import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/theme.context.tsx';
import Layout from './layouts/Employees/Layout.tsx';
import EmployeePage from './pages/EmployeePage/EmployeePage.tsx';
import Employees from './pages/Employees/Employees.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/employees',
        element: <Employees />,
      },
      {
        path: '/employees/:id',
        element: <EmployeePage />,
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
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
