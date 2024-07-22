import { SelectedOptions } from '../Select/Select.interface';

export interface EmployeeFilterProps {
  onFilterChange: (updatedFilterOptions: SelectedOptions) => void;
}
