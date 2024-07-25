import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ThemeContextProvider } from './context/theme.context.tsx';
import Layout from './layouts/Employees/Layout.tsx';
import EmployeePage from './pages/EmployeePage/EmployeePage.tsx';
import Employees from './pages/Employees/Employees.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/main/employees" />, // Перенаправление с /main на /main/employees
  },
  {
    path: '/main',
    element: <Navigate to="/main/employees" />, // Перенаправление с /main на /main/employees
  },
  {
    path: '/main/employees',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Employees />, // Список сотрудников
      },
      {
        path: ':id',
        element: <EmployeePage />, // Страница сотрудника
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
