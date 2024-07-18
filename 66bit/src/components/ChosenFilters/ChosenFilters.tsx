import styles from './ChosenFilters.module.css';

const ChosenFilters = () => {
  return (
    <>
      <div className={styles['chosen-filters-container']}>
        <h4>Выбранные фильтры:</h4>
        <div className={styles['chosen-filter-items-container']}>
          <div className={styles['chosen-filter-item']}>
            <img className={styles['delete-btn']} src="/cross.svg" alt="" />
            fullstack
          </div>
          <div className={styles['chosen-filter-item']}>
            <img className={styles['delete-btn']} src="/cross.svg" alt="" />
            fullstack
          </div>
        </div>
      </div>
    </>
  );
};

export default ChosenFilters;
