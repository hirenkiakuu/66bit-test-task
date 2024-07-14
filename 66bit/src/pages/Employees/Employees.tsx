import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import EmployeesFilter from '../../components/EmployeesFilter/EmployeesFilter';
import styles from './Employees.module.css';

const Employees = () => {
  return (
    <>
      <BreadCrumbs />
      <EmployeesFilter />
      {/* <Button>Найти</Button> */}
    </>
  );
};

export default Employees;
