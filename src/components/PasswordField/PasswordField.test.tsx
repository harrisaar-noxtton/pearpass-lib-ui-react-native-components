import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { PasswordField } from './PasswordField';
import { InputFieldProps } from '../InputField/types';

jest.mock('./PasswordField.styles', () => ({
  styles: {
    rightSlotContainer: {},
    divider: {},
    eyeButton: {},
  },
}));

jest.mock('../../icons', () => ({
  EyeFilled: () => <div data-testid="eye-filled" />,
  EyeOutlined: () => <div data-testid="eye-outlined" />,
}));

jest.mock('../InputField/InputField', () => ({
  InputField: (props: InputFieldProps) => <div data-testid="mock-input-field" {...props} />
}));

describe('PasswordField', () => {
  it('renders correctly with default props', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordField
          label="Password"
          value=""
          placeholderText="Enter your password"
          onChangeText={() => { }}
          testID="password-field"
        />
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with an error and a password indicator', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordField
          label="Confirm Password"
          value="pass123"
          placeholderText="Repeat password"
          onChangeText={() => { }}
          variant="error"
          errorMessage="Passwords do not match."
          passwordIndicator="vulnerable"
          testID="repeat-password-field"
        />
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('triggers onChangeText callback when input value changes', () => {
    const onChangeTextMock = jest.fn();
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordField
          label="Password"
          value=""
          placeholderText="Enter your password"
          onChangeText={onChangeTextMock}
          testID="password-field"
        />
      );
    });

    const mockInputField = component!.root.findByProps({ 'data-testid': 'mock-input-field' });

    act(() => {
      mockInputField.props.onChangeText('secret123');
    });

    expect(onChangeTextMock).toHaveBeenCalledWith('secret123');
    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
  });
});
