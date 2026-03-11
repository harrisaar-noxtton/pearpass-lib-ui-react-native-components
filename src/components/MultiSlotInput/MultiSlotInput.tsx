import React from 'react';
import { html } from 'react-strict-dom';
import { styles } from './MultiSlotInput.styles';
import { MultiSlotInputProps } from './types';
import { InputField } from '../InputField/InputField';
import { FieldError } from '../FieldError/FieldError';
import { Button } from '../Button/Button';
import SvgAdd from '../../icons/components/Add';
import SvgClose from '../../icons/components/Close';

export const MultiSlotInput = (props: MultiSlotInputProps): React.ReactElement => {
  const {
    label,
    values,
    onChange,
    placeholderText,
    addButtonLabel = 'Add another',
    errorMessage,
    maxSlots,
    testID,
  } = props;

  const slots = values;

  const isAtMax = maxSlots !== undefined && slots.length >= maxSlots;

  const handleChange = (index: number, text: string) => {
    const next = [...slots];
    next[index] = text;
    onChange(next);
  };

  const handleAdd = () => {
    if (isAtMax) return;
    onChange([...slots, '']);
  };

  const handleRemove = (index: number) => {
    const next = slots.filter((_, i) => i !== index);
    onChange(next);
  };

  return (
    <html.div style={styles.root} data-testid={testID}>
      <html.div style={[styles.container, !!errorMessage && styles.containerError]}>
        {slots.map((value, index) => {
          return (
            <html.div style={styles.row} key={index}>
              <InputField
                label={label}
                value={value}
                placeholderText={placeholderText}
                onChangeText={(text) => handleChange(index, text)}
                variant={'default'}
                isGrouped={true}
                testID={testID ? `${testID}-slot-${index}` : undefined}
                rightSlot={
                  slots.length > 1 ? (
                    <Button
                      variant="tertiary"
                      size="small"
                      aria-label={`Remove slot ${index + 1}`}
                      onClick={() => handleRemove(index)}
                      data-testid={testID ? `${testID}-remove-button-${index}` : undefined}
                      iconBefore={<html.span style={styles.removeIconWrapper}><SvgClose /></html.span>}
                    />
                  ) : undefined
                }
              />
            </html.div>
          );
        })}

        {!isAtMax && (
          <html.div style={styles.ctaSlot}>
            <Button
              variant="tertiary"
              onClick={handleAdd}
              aria-label={addButtonLabel}
              data-testid={testID ? `${testID}-add-button` : undefined}
              iconBefore={<html.span style={styles.addIcon}><SvgAdd /></html.span>}
            >
              <html.span style={styles.addButtonLabel}>{addButtonLabel}</html.span>
            </Button>
          </html.div>
        )}
      </html.div>

      {errorMessage && (
        <FieldError>{errorMessage}</FieldError>
      )}
    </html.div>
  );
};

MultiSlotInput.displayName = 'MultiSlotInput';
