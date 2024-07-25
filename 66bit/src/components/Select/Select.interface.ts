export interface SelectOption {
  value: string;
  label: string | undefined;
}

export interface SearchQueryOption {
  value: string;
}

export interface SelectedOptions {
  [key: string]: SelectOption[];
}

export interface SelectProps {
  selectableOptions: SelectOption[];
  selectTitle: string;
  selectQueryParameter: string;
  selectedOptions: SelectedOptions;
  onSelectionChange: (updatedSelection: SelectedOptions) => void;
}
