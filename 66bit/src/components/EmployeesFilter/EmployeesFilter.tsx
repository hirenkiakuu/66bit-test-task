import Input from '../Input/Input';
import ChosenFilters from '../ChosenFilters/ChosenFilters';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './EmployeesFilter.module.css';
import { useState } from 'react';

const EmployeesFilter = ({ onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectionChange = (values) => {
    console.log(values);
    setSelectedOptions(values);
    onFilterChange(values);
  };

  return (
    <>
      <div className={styles['filter-panel-container']}>
        <div className={styles['filter-panel-header']}>
          <h1>Список сотрудников</h1>

          <Select onSelectionChange={handleSelectionChange} />
        </div>
        <Input
          type="text"
          placeholder="Поиск"
          className={styles['search-bar']}
        />{' '}
      </div>
      <div className={styles['filter-panel-bottom']}>
        <div className={styles['filter-panel-bottom-inner']}>
          <ChosenFilters />
          <Button>Найти</Button>
        </div>
      </div>
    </>
  );
};

export default EmployeesFilter;
