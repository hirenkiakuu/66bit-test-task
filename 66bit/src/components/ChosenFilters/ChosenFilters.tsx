import { ChosenFiltersProps } from './ChosenFilters.interface';
import styles from './ChosenFilters.module.css';

const ChosenFilters = ({
  chosenFilterOptions,
  onRemoveFilter,
}: ChosenFiltersProps) => {
  return (
    <div className={styles['chosen-filters-container']}>
      <h4>Выбранные фильтры:</h4>
      <div className={styles['chosen-filter-items-container']}>
        {Object.entries(chosenFilterOptions).map(([key, filterValues]) =>
          filterValues.map((filterValue) => (
            <div
              key={filterValue.value}
              className={styles['chosen-filter-item']}
              onClick={() => onRemoveFilter(key, filterValue.value)}
            >
              <img className={styles['delete-btn']} src="/cross.svg" alt="" />
              {filterValue.label}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChosenFilters;
