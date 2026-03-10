import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { html, css } from 'react-strict-dom';
import { AlertMessage } from './AlertMessage';
import AccountCircleSharp from '../../icons/components/AccountCircleSharp';
import { tokens } from '../../theme/tokens.css';

const meta: Meta<typeof AlertMessage> = {
  title: 'Components/AlertMessage',
  component: AlertMessage,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'big'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertMessage>;

const storyStyles = css.create({
  container: {
    padding: tokens.spacing24,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing24,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing16,
  },
  sectionTitle: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize16,
    fontWeight: tokens.weightMedium,
    color: tokens.colorTextPrimary,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorBorderSecondary,
    paddingBottom: tokens.spacing8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: tokens.spacing20,
    flexWrap: 'wrap',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing8,
    flex: 1,
    minWidth: '300px',
  },
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary,
  },
});

export const BigSuccess: Story = {
  args: {
    variant: 'success',
    size: 'big',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color={tokens.colorPrimary} />,
  },
};

export const MediumError: Story = {
  args: {
    variant: 'error',
    size: 'medium',
    title: 'Operation Failed',
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color={tokens.colorSurfaceError} />,
  },
};

export const SmallSuccess: Story = {
  args: {
    variant: 'success',
    size: 'small',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color={tokens.colorPrimary} />,
  },
};

export const WithActionBig: Story = {
  args: {
    variant: 'error',
    size: 'big',
    title: 'Operation Failed',
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color={tokens.colorSurfaceError} />,
    actionText: 'Retry',
    onAction: () => console.log('Retry clicked!'),
  },
};

export const WithActionMedium: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color={tokens.colorPrimary} />,
    actionText: 'View Details',
    onAction: () => console.log('View details clicked!'),
  },
};

export const WithActionSmall: Story = {
  args: {
    variant: 'success',
    size: 'small',
    title: 'Operation Failed',
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color={tokens.colorPrimary} />,
    actionText: 'Retry',
    onAction: () => console.log('Retry clicked!'),
  },
};

export const VariantMatrix: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <html.div style={storyStyles.container}>
      {/* Big Section */}
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Big Size</html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Success</html.div>
            <AlertMessage
              variant="success"
              size="big"
              title="Success Title"
              description="This is a big success message with a long description to see how it wraps."
              icon={<AccountCircleSharp color={tokens.colorPrimary} />}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error with Action</html.div>
            <AlertMessage
              variant="error"
              size="big"
              title="Error Title"
              description="This is a big error message with an action button."
              icon={<AccountCircleSharp color={tokens.colorSurfaceError} />}
              actionText="Action"
              onAction={() => { }}
            />
          </html.div>
        </html.div>
      </html.div>

      {/* Medium Section */}
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Medium Size</html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Success with Action</html.div>
            <AlertMessage
              variant="success"
              size="medium"
              title="Success Title"
              description="Medium success message with action."
              icon={<AccountCircleSharp color={tokens.colorPrimary} />}
              actionText="View"
              onAction={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error</html.div>
            <AlertMessage
              variant="error"
              size="medium"
              title="Error Title"
              description="Medium error message description."
              icon={<AccountCircleSharp color={tokens.colorSurfaceError} />}
            />
          </html.div>
        </html.div>
      </html.div>

      {/* Small Section */}
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Small Size</html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Success</html.div>
            <AlertMessage
              variant="success"
              size="small"
              title="Small Success"
              description="Small alert message (no title visible)."
              icon={<AccountCircleSharp color={tokens.colorPrimary} />}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error with Action</html.div>
            <AlertMessage
              variant="error"
              size="small"
              title="Small Error"
              description="Small alert with action."
              icon={<AccountCircleSharp color={tokens.colorSurfaceError} />}
              actionText="Undo"
              onAction={() => { }}
            />
          </html.div>
        </html.div>
      </html.div>
    </html.div>
  ),
};

