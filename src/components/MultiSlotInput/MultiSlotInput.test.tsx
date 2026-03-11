import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MultiSlotInput } from './MultiSlotInput';

jest.mock('./MultiSlotInput.styles', () => ({
  styles: {
    root: {},
    row: {},
    inputWrapper: {},
    removeButton: {},
    removeButtonDisabled: {},
    removeIcon: {},
    addButton: {},
    addButtonDisabled: {},
    addButtonLabel: {},
  },
}));

jest.mock('../InputField/InputField', () => ({
  InputField: (props: {
    label: string;
    value: string;
    placeholderText?: string;
    onChangeText: (v: string) => void;
    variant?: string;
    testID?: string;
    rightSlot?: React.ReactNode;
  }) => (
    <div
      data-testid={
        props.testID ? `${props.testID}-container` : 'mock-input-container'
      }
    >
      <input
        data-testid={props.testID ?? 'mock-input'}
        value={props.value}
        placeholder={props.placeholderText}
        onChange={(e) => props.onChangeText(e.target.value)}
      />
      {props.rightSlot}
    </div>
  ),
}));

jest.mock('../FieldError/FieldError', () => ({
  FieldError: (props: { children: React.ReactNode }) => (
    <div data-testid="mock-field-error">{props.children}</div>
  ),
}));

jest.mock('../Button/Button', () => ({
  Button: (props: {
    'aria-label'?: string;
    onClick?: () => void;
    'data-testid'?: string;
  }) => (
    <button
      data-testid={
        props['data-testid'] ??
        props['aria-label']?.toLowerCase().replace(/\s+/g, '-')
      }
      onClick={props.onClick}
    >
      Mock Button
    </button>
  ),
}));

describe('MultiSlotInput', () => {
  it('calls onChange with a new empty slot when add button is clicked', () => {
    const handleChange = jest.fn();
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={[]}
          onChange={handleChange}
          testID="test"
        />
      );
    });

    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'test-add-button' })
        .props.onClick();
    });

    expect(handleChange).toHaveBeenCalledWith(['']);
  });

  it('calls onChange with 4 elements when add button is clicked and there are already 3', () => {
    const handleChange = jest.fn();
    let component: renderer.ReactTestRenderer;
    const initialValues = ['one', 'two', 'three'];

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={initialValues}
          onChange={handleChange}
          testID="test"
        />
      );
    });

    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'test-add-button' })
        .props.onClick();
    });

    expect(handleChange).toHaveBeenCalledWith([...initialValues, '']);
  });

  it('calls onChange with updated value when a slot input changes', () => {
    const handleChange = jest.fn();
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['first', 'second']}
          onChange={handleChange}
          testID="test"
        />
      );
    });

    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'test-slot-0' })
        .props.onChange({ target: { value: 'firstA' } });
    });

    expect(handleChange).toHaveBeenCalledWith(['firstA', 'second']);
  });

  it('calls onChange with the middle element removed when its remove button is clicked', () => {
    const handleChange = jest.fn();
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['one', 'two', 'three']}
          onChange={handleChange}
          testID="test"
        />
      );
    });

    act(() => {
      component!.root
        .findByProps({ 'data-testid': 'test-remove-button-1' })
        .props.onClick();
    });

    expect(handleChange).toHaveBeenCalledWith(['one', 'three']);
  });

  it('does not render remove button for a single slot, renders it for both when two slots exist', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['one']}
          onChange={() => { }}
          testID="test"
        />
      );
    });

    expect(() =>
      component!.root.findByProps({ 'data-testid': 'test-remove-button-0' })
    ).toThrow();

    act(() => {
      component.update(
        <MultiSlotInput
          label="test"
          values={['one', 'two']}
          onChange={() => { }}
          testID="test"
        />
      );
    });

    expect(
      component!.root.findByProps({ 'data-testid': 'test-remove-button-0' })
    ).toBeTruthy();
    expect(
      component!.root.findByProps({ 'data-testid': 'test-remove-button-1' })
    ).toBeTruthy();
  });

  it('does not render error message when errorMessage prop is not provided', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['']}
          onChange={() => { }}
          testID="test"
        />
      );
    });

    expect(() =>
      component!.root.findByProps({ 'data-testid': 'mock-field-error' })
    ).toThrow();
  });

  it('renders error message when errorMessage prop is provided', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['']}
          onChange={() => { }}
          errorMessage="Something went wrong"
          testID="test"
        />
      );
    });

    const errorNode = component!.root.findByProps({
      'data-testid': 'mock-field-error',
    });

    expect(errorNode).toBeTruthy();
    expect(errorNode.props.children).toBe('Something went wrong');
  });

  it('hides the add button and renders all slots when maxSlots is reached', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <MultiSlotInput
          label="test"
          values={['one', 'two']}
          maxSlots={2}
          onChange={() => { }}
          testID="test"
        />
      );
    });

    // Add button should not exist
    expect(() =>
      component!.root.findByProps({ 'data-testid': 'test-add-button' })
    ).toThrow();

    // Both slot inputs should still be present
    expect(
      component!.root.findByProps({ 'data-testid': 'test-slot-0' })
    ).toBeTruthy();
    expect(
      component!.root.findByProps({ 'data-testid': 'test-slot-1' })
    ).toBeTruthy();
  });
});
