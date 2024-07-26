
import { ChangeEvent, useState } from 'react';
import { EmployeeFilterProps } from './EmployeesFilter.interface';
import { SelectedOptions, SelectOption } from '../Select/Select.interface';
import Input from '../Input/Input';
import ChosenFilters from '../ChosenFilters/ChosenFilters';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './EmployeesFilter.module.css';

const positionSelectConfig: SelectOption[] = [
  { value: 'Backend', label: 'Backend-разработчик' },
  { value: 'Frontend', label: 'Frontend-разработчик' },
  { value: 'Analyst', label: 'Аналитик' },
  { value: 'Manager', label: 'Менеджер' },
  { value: 'Designer', label: 'Дизайнер' },
];

const genderSelectConfig: SelectOption[] = [
  { value: 'Male', label: 'Мужчина' },
  { value: 'Female', label: 'Женщина' },
];

const stackSelectConfig: SelectOption[] = [
  { value: 'CSharp', label: 'C#' },
  { value: 'React', label: 'React' },
  { value: 'Java', label: 'Java' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Word', label: 'Word' },
];

const EmployeesFilter = ({ onFilterChange }: EmployeeFilterProps) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectionChange = (newSelectedOptions: SelectedOptions) => {
    const updatedOptions = { ...selectedOptions, ...newSelectedOptions };

    console.log(newSelectedOptions);
    setSelectedOptions(updatedOptions);
  };

  const handleRemoveFilter = (filterKey: string, filterValue: string) => {
    const updatedOptions = {
      ...selectedOptions,
      [filterKey]: selectedOptions[filterKey].filter(
        (option) => option.value !== filterValue
      ),
    };

    setSelectedOptions(updatedOptions);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;

    setSearchQuery(newSearchQuery);
  };

  const handleSearchClick = () => {
    onFilterChange({
      ...selectedOptions,
      Name: [{ value: searchQuery, label: searchQuery }],
    });
  };

  return (
    <>
      <div className={styles['filter-panel-container']}>
        <div className={styles['filter-panel-header']}>
          <h1>Список сотрудников</h1>
          <div className={styles['filter-select-container']}>
            <Select
              selectTitle={'Должность'}
              selectQueryParameter={'Position'}
              selectableOptions={positionSelectConfig}
              onSelectionChange={handleSelectionChange}
              selectedOptions={selectedOptions}
            />
            <Select
              selectTitle={'Пол'}
              selectQueryParameter={'Gender'}
              selectableOptions={genderSelectConfig}
              onSelectionChange={handleSelectionChange}
              selectedOptions={selectedOptions}
            />
            <Select
              selectTitle={'Стек технологий'}
              selectQueryParameter={'Stack'}
              selectableOptions={stackSelectConfig}
              onSelectionChange={handleSelectionChange}
              selectedOptions={selectedOptions}
            />
          </div>
          <Input
            type="text"
            placeholder="Поиск"
            className={styles['search-bar']}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles['filter-panel-bottom']}>
        <div className={styles['filter-panel-bottom-inner']}>
          <ChosenFilters
            chosenFilterOptions={selectedOptions}
            onRemoveFilter={handleRemoveFilter}
          />
          <Button onClick={handleSearchClick}>Найти</Button>
        </div>
      </div>
    </>
  );
};

export default EmployeesFilter;
