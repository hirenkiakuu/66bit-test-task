import axios from 'axios';
import EmployeesFilter from '../EmployeesFilter/EmployeesFilter';
import EmployeesTable from '../EmployeesTable/EmployeesTable';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectedOptions } from '../Select/Select.interface';
import { Employee } from '../model/Employee.interface';
import styles from './EmployeesDashboard.module.css';

const PAGE_SIZE = 5;

const EmployeesDashboard = () => {
  const [page, setPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState<SelectedOptions>({});
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastEmployeeElementRef = useCallback((node: Element | null) => {
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
      const queryParams = buildQueryParams(filterOptions);

      const res = await axios.get<Employee[]>(
        `https://frontend-test-api.stk8s.66bit.ru/api/Employee?${queryParams}`
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

  const buildQueryParams = (filterOptions: SelectedOptions): string => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(filterOptions)) {
      if (Array.isArray(value)) {
        value.forEach((val) => queryParams.append(key, val.value));
      } else {
        queryParams.append(key, value);
      }
    }

    queryParams.append('Page', page.toString());
    queryParams.append('Count', PAGE_SIZE.toString());

    return queryParams.toString();
  };

  const handleFilterChange = (updatedFilterOptions: SelectedOptions) => {
    console.log(updatedFilterOptions);
    setFilterOptions(updatedFilterOptions);
    setPage(1);
    setEmployeesData([]);
    // setPage(1);
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
