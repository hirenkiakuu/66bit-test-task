import { SelectedOptions } from '../Select/Select.interface';

export interface ChosenFiltersProps {
  chosenFilterOptions: SelectedOptions;
  onRemoveFilter: (key: string, filterValue: string) => void;
}
