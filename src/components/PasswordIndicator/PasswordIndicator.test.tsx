import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { PasswordIndicator } from './PasswordIndicator';

jest.mock('./PasswordIndicator.styles', () => ({
  styles: {
    container: {},
    iconContainer: {},
    label: {},
    variantVulnerable: {},
    variantDecent: {},
    variantStrong: {},
    variantMatch: {},
  },
  variantStyleMap: {
    vulnerable: {},
    decent: {},
    strong: {},
    match: {},
  },
  variantLabelMap: {
    vulnerable: 'Vulnerable',
    decent: 'Decent',
    strong: 'Strong',
    match: 'Match',
  },
}));

describe('PasswordIndicator', () => {
  it('renders correctly for vulnerable variant', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordIndicator variant="vulnerable" testID="password-indicator-vulnerable" />
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for strong variant', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <PasswordIndicator variant="strong" testID="password-indicator-strong" />
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });
});
