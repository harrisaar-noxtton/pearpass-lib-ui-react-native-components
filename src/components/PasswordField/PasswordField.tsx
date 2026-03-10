import React from 'react';
import { html } from 'react-strict-dom';
import { EyeFilled, EyeOutlined } from '../../icons';
import { InputField } from '../InputField/InputField';
import { PasswordIndicator } from '../PasswordIndicator/PasswordIndicator';
import { styles } from './PasswordField.styles';
import { PasswordFieldProps } from './types';

const EYE_OPEN_LABEL = 'Hide password';
const EYE_CLOSED_LABEL = 'Show password';

export const PasswordField = (props: PasswordFieldProps): React.ReactElement => {
  const {
    label,
    value,
    placeholderText,
    onChangeText,
    variant = 'default',
    errorMessage,
    passwordIndicator,
    testID,
  } = props;

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const eyeIcon = (
    <html.button
      onClick={toggleVisibility}
      aria-label={isVisible ? EYE_OPEN_LABEL : EYE_CLOSED_LABEL}
      style={styles.eyeButton}
    >
      {isVisible ? (
        <EyeFilled width={20} height={20} />
      ) : (
        <EyeOutlined width={20} height={20} />
      )}
    </html.button>
  );

  const rightSlot = (
    <html.div style={styles.rightSlotContainer}>
      {passwordIndicator && (
        <>
          <PasswordIndicator variant={passwordIndicator} />
          <html.div style={styles.divider} />
        </>
      )}
      {eyeIcon}
    </html.div>
  );

  return (
    <InputField
      label={label}
      value={value}
      placeholderText={placeholderText}
      onChangeText={onChangeText}
      variant={variant}
      errorMessage={errorMessage}
      inputType={isVisible ? 'text' : 'password'}
      rightSlot={rightSlot}
      testID={testID}
    />
  );
};

PasswordField.displayName = 'PasswordField';
