import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { AlertMessage } from './AlertMessage';

jest.mock('./AlertMessage.styles', () => ({
  styles: {
    container: {},
    messageContainer: {},
    messageContainerBig: {},
    iconContainer: {},
    copy: {},
    title: {},
    description: {},
    link: {},
  },
  variantStyleMap: {
    success: {},
    error: {},
  },
  sizeStyleMap: {
    small: {},
    medium: {},
    big: {},
  },
}));

jest.mock('../Link/Link.styles', () => ({
  styles: {
    linkBase: {},
  },
}));

describe('AlertMessage', () => {
  it('renders correctly with all props', () => {
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <AlertMessage
          variant="success"
          size="medium"
          title="Test Alert"
          description="This is a test description."
          actionText="Test Action"
          onAction={() => { }}
          icon={<span>Icon</span>}
          testID="alert-message"
          actionTestId="alert-action"
        />
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('triggers onAction callback when action text is clicked', () => {
    const onAction = jest.fn();
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <AlertMessage
          variant="error"
          size="small"
          title="Error Title"
          description="Error occurred."
          actionText="Retry"
          onAction={onAction}
          actionTestId="alert-action"
        />
      );
    });

    const actionElement = component!.root.findByProps({ 'data-testid': 'alert-action' });

    act(() => {
      actionElement.props.onClick?.();
    });

    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
