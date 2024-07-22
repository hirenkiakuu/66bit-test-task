import cn from 'classnames';
import styles from './Select.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { SelectOption, SelectProps } from './Select.interface';

const Select = ({
  selectableOptions,
  selectTitle,
  selectQueryParameter,
  onSelectionChange,
  selectedOptions,
}: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [localSelectedOptions, setLocalSelectedOptions] = useState<
    SelectOption[]
  >([]);

  useEffect(() => {
    if (selectedOptions && selectedOptions[selectQueryParameter]) {
      setLocalSelectedOptions(selectedOptions[selectQueryParameter]);
    }
  }, [selectedOptions, selectQueryParameter]);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, dataset } = e.target;
    const label = dataset.label || '';

    const updatedSelectionOptions = checked
      ? [...localSelectedOptions, { value, label }]
      : localSelectedOptions.filter((option) => option.value !== value);

    setLocalSelectedOptions(updatedSelectionOptions);
    onSelectionChange({ [selectQueryParameter]: updatedSelectionOptions });
  };

  return (
    <>
      <div className={styles['multi-select']}>
        <div className={styles['multi-select-header']} onClick={toggleDropdown}>
          <div>{selectTitle}</div>
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
            {selectableOptions.map((option) => (
              <li
                key={option.value}
                className={styles['multi-select-dropdown__option']}
              >
                <span>{option.label}</span>
                <input
                  className={styles['multi-select-dropdown__option-checkbox']}
                  type="checkbox"
                  value={option.value}
                  name={selectQueryParameter}
                  data-label={option.label}
                  onChange={handleCheckboxChange}
                  checked={localSelectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  )}
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
