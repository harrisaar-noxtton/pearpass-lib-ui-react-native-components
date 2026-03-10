export type PasswordIndicatorVariant = 'vulnerable' | 'decent' | 'strong' | 'match';

export interface PasswordIndicatorProps {
  variant: PasswordIndicatorVariant;
  testID?: string;
}
