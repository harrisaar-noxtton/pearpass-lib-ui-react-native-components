
export interface MultiSlotInputProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholderText?: string;
  addButtonLabel?: string;
  errorMessage?: string;
  maxSlots?: number;
  testID?: string;
}
