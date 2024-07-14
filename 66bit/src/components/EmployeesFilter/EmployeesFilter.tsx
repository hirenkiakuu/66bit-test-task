import Input from '../Input/Input';
import styles from './EmployeesFilter.module.css';

const EmployeesFilter = () => {
  return (
    <>
      <div className={styles['filter-panel-container']}>
        <div className={styles['filter-panel-header']}>
          <h1>Список сотрудников</h1>
          <select name="" id=""></select>
        </div>
        <Input
          type="text"
          placeholder="Поиск"
          className={styles['search-bar']}
        />{' '}
        {/* ChosenFilters */}
        {/* Button */}
        Выбранные фильтры Кнопка
      </div>
    </>
  );
};

export default EmployeesFilter;
