import cn from 'classnames';
import styles from './Select.module.css';
import { useState } from 'react';

const Select = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  return (
    <>
      <div className={styles['multi-select']}>
        <div className={styles['multi-select-header']} onClick={toggleDropdown}>
          <div>Должность</div>
          <img
            src={isDropdownOpen ? '/arrow-up.svg' : '/arrow-down.svg'}
            alt=""
            className={styles['toggle-arrow']}
          />
        </div>
        <div
          className={cn(styles['multi-select-dropdown'], {
            [styles['active']]: isDropdownOpen,
          })}
        >
          <ul className={styles['multi-select-dropdown__options']}>
            <li className={styles['multi-select-dropdown__option']}>
              <span>Backend-разработчик</span>
              <input
                className={styles['multi-select-dropdown__option-checkbox']}
                type="checkbox"
              ></input>
            </li>
            <li className={styles['multi-select-dropdown__option']}>
              <span>Frontend-разработчик</span>
              <input
                className={styles['multi-select-dropdown__option-checkbox']}
                type="checkbox"
              ></input>
            </li>
            <li className={styles['multi-select-dropdown__option']}>
              <span>Аналитик</span>
              <input
                className={styles['multi-select-dropdown__option-checkbox']}
                type="checkbox"
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
