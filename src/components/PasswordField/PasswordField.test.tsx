import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { PasswordField } from './PasswordField';


jest.mock('./PasswordField.styles', () => ({
  styles: {
    rightSlotContainer: {},
    divider: {},
    eyeButton: {},
  },
}));

jest.mock('../Button/Button.styles', () => ({
  styles: {
    buttonBase: {},
    fullWidth: {},
    sizeSmall: {},
    sizeMedium: {},
    iconOnlySmall: {},
    iconOnlyMedium: {},
    label: {},
    icon: {},
    iconSize: () => ({}),
    disabled: {},
    loading: {},
    loadingContent: {},
    spinnerContainer: {},
    spinner: {},
    variantPrimary: {},
    variantPrimaryDisabled: {},
    variantSecondary: {},
    variantSecondaryDisabled: {},
    variantTertiary: {},
    variantTertiaryDisabled: {},
    variantDestructive: {},
    variantDestructiveDisabled: {},
  },
}));

jest.mock('../Button/Button.config', () => ({
  variantStyleMap: { primary: {}, secondary: {}, tertiary: {}, destructive: {} },
  sizeStyleMap: { small: {}, medium: {} },
  iconOnlyStyleMap: { small: {}, medium: {} },
  iconSizeMap: { small: 16, medium: 18 },
  variantDisabledStyleMap: {
    primary: {},
    secondary: {},
    tertiary: {},
    destructive: {},
  },
}));

jest.mock('../PasswordIndicator/PasswordIndicator.styles', () => ({
  styles: {
    container: {},
    iconContainer: {},
    label: {},
    variantVulnerable: {},
    variantDecent: {},
    variantStrong: {},
    variantMatch: {},
  },
  variantStyleMap: { vulnerable: {}, decent: {}, strong: {}, match: {} },
  variantLabelMap: {
    vulnerable: 'Vulnerable',
    decent: 'Decent',
    strong: 'Strong',
    match: 'Match',
  },
}));

jest.mock('../InputField/InputField.styles', () => ({
  styles: {
    wrapper: {},
    container: {},
    containerFocused: {},
    containerError: {},
    containerGrouped: {},
    innerColumn: {},
    label: {},
    input: {},
    rightSlotContainer: {},
    errorMessage: {},
  },
  variantContainerStyleMap: {
    default: {},
    error: {},
  },
}));

jest.mock('../Text/Text.styles', () => ({
  styles: {
    textBase: {},
    variantLabel: {},
    variantBody: {},
    variantBodyEmphasized: {},
    variantCaption: {},
  },
}));

jest.mock('../Text/Text.config', () => ({
  variantStyleMap: { label: {}, body: {}, bodyEmphasized: {}, caption: {} },
}));

jest.mock('../FieldError/FieldError', () => ({
  FieldError: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="mock-field-error">{children}</span>
  ),
}));
jest.mock('../../icons', () => ({
  EyeFilled: () => <div data-testid="eye-filled" />,
  EyeOutlined: () => <div data-testid="eye-outlined" />,
}));

describe('PasswordField', () => {
  it('renders an input element and hides password by default', () => {
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

    // Input should be present
    const input = component!.root.findByType('input');
    expect(input).toBeTruthy();

    // Password should be obscured by default — type="password"
    expect(input.props.type).toBe('password');

    // Eye icon shown in its default (outlined = hidden) state
    expect(() =>
      component!.root.findByProps({ 'data-testid': 'eye-outlined' })
    ).not.toThrow();
  });

  it('renders error message and password indicator when provided', () => {
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

    // Error message should be rendered
    const errorNode = component!.root.findByProps({
      'data-testid': 'mock-field-error',
    });
    expect(errorNode).toBeTruthy();
    expect(errorNode.props.children).toBe('Passwords do not match.');

    // Password indicator for 'vulnerable' should be visible
    // (rendered by PasswordIndicator — its label text comes from variantLabelMap)
    const tree = component!.toJSON();
    expect(JSON.stringify(tree)).toContain('Vulnerable');
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

    act(() => {
      component!.root
        .findByType('input')
        .props.onInput({ target: { value: 'secret123' } });
    });

    expect(onChangeTextMock).toHaveBeenCalledWith('secret123');
    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
  });
  it('toggles input type between password and text when eye button is clicked', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordField
          label="Password"
          value="secret"
          placeholderText="Enter your password"
          onChangeText={() => { }}
          testID="password-field"
        />
      );
    });

    const input = () => component!.root.findByType('input');

    // Initially obscured
    expect(input().props.type).toBe('password');

    // Click the eye toggle button
    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'password-field-eye-button' })
        .props.onClick();
    });

    // Now visible
    expect(input().props.type).toBe('text');

    // Click again to re-hide
    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'password-field-eye-button' })
        .props.onClick();
    });

    expect(input().props.type).toBe('password');
  });
});
