import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import EmployeesFilter from '../../components/EmployeesFilter/EmployeesFilter';
import styles from './Employees.module.css';
import EmployeesDashboard from '../../components/EmployeesDashboard/EmployeesDashboard';

const Employees = () => {
  return (
    <>
      <BreadCrumbs />
      <EmployeesDashboard />
      {/* <Button>Найти</Button> */}
    </>
  );
};

export default Employees;
