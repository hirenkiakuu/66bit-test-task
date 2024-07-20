import cn from 'classnames';
import styles from './Select.module.css';
import { useState } from 'react';

const selectConfig = [
  {
    name: 'Position',
    value: 'Backend',
    label: 'Backend-разработчик',
  },
  {
    name: 'Position',
    value: 'Frontend',
    label: 'Frontend-разработчик',
  },
];

const Select = ({ onSelectionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const handleCheckboxChange = (e) => {
    const { value, name, checked } = e.target;

    // Создаем копию текущих выбранных опций
    const updatedSelectionOptions = { ...selectedOptions };

    // Если массив для ключа не существует, инициализируем его
    if (!updatedSelectionOptions[name]) {
      updatedSelectionOptions[name] = [];
    }

    // Добавляем или удаляем значение в массиве
    if (checked) {
      updatedSelectionOptions[name] = [...updatedSelectionOptions[name], value];
    } else {
      updatedSelectionOptions[name] = updatedSelectionOptions[name].filter(
        (option) => option !== value
      );
    }

    // Обновляем состояние и вызываем функцию обратного вызова
    setSelectedOptions(updatedSelectionOptions);
    onSelectionChange(updatedSelectionOptions);
  };

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
            {selectConfig.map((option) => (
              <li
                key={option.name}
                className={styles['multi-select-dropdown__option']}
              >
                <span>{option.label}</span>
                <input
                  className={styles['multi-select-dropdown__option-checkbox']}
                  type="checkbox"
                  value={option.value}
                  name={option.name}
                  onChange={handleCheckboxChange}
                ></input>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
