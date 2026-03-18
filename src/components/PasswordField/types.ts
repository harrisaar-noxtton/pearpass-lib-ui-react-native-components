import { PasswordIndicatorVariant } from '../PasswordIndicator/types';

export interface PasswordFieldProps {
  label: string;
  value: string;
  placeholderText?: string;
  onChangeText: (value: string) => void;
  testID?: string;
  /** When 'error', border turns red */
  variant?: 'default' | 'error';
  /** Error message rendered below the component */
  errorMessage?: string;
  /** If defined, renders the PasswordIndicator to the left of the eye icon */
  passwordIndicator?: PasswordIndicatorVariant;
  isGrouped?: boolean;
  /** When true, shows a copy button in the right slot */
  copyable?: boolean;
  /** Called when the copy button is clicked. Receives the current value. */
  onCopy?: (value: string) => void;
  /** When provided, shows an animated info box below the input on focus */
  infoBox?: string;
}
