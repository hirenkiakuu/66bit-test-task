import axios from 'axios';
import EmployeesFilter from '../EmployeesFilter/EmployeesFilter';
import EmployeesTable from '../EmployeesTable/EmployeesTable';
import styles from './EmployeesDashboard.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';

const PAGE_SIZE = 5;

const EmployeesDashboard = () => {
  // Дата для таблицы передается в нее
  //

  const [page, setPage] = useState(1);

  const [filterOptions, setFilterOptions] = useState({});

  const [employeesData, setEmployeesData] = useState([]);

  const observer = useRef();

  const lastEmployeeElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  const fetchEmployees = async () => {
    try {
      const params = {
        Page: page,
        Count: PAGE_SIZE,
        Position: ['Backend', 'Frontend'],
      };

      const params = new URLSearchParams();

      console.log(params);

      const res = await axios.get(
        `https://frontend-test-api.stk8s.66bit.ru/api/Employee`,
        {
          params,
        }
      );

      console.log(res.data); // УДАЛИТЬ
      setEmployeesData((prevData) => [...prevData, ...res.data]); // ПЕРЕДЕЛАТЬ
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [page, filterOptions]);

  const handleFilterChange = (values) => {
    let updatedFilterOptions = {
      ...filterOptions,
      ...values,
    };

    console.log(updatedFilterOptions);

    setFilterOptions(updatedFilterOptions);
  };

  return (
    <>
      <EmployeesFilter onFilterChange={handleFilterChange} />
      <EmployeesTable
        employeesData={employeesData}
        lastEmployeeElementRef={lastEmployeeElementRef}
      />
    </>
  );
};

export default EmployeesDashboard;
