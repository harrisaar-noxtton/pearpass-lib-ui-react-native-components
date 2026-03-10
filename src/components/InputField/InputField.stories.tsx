import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { html, css } from 'react-strict-dom';
import { InputField } from './InputField';
import { tokens } from '../../theme/tokens.css';
import { AccountCircleOutlined, DoneAll, VerifiedUser } from '../../icons';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error'],
    },
    inputType: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
    label: { control: 'text' },
    value: { control: 'text' },
    placeholderText: { control: 'text' },
    errorMessage: { control: 'text' },
    rightSlot: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: tokens.spacing20,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing8,
  },
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary,
  },
});

export const Default: Story = {
  args: {
    label: 'Username',
    value: '',
    placeholderText: 'Enter username',
    variant: 'default',
    onChangeText: () => { },
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    variant: 'default',
    onChangeText: () => { },
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    value: 'bad-email',
    variant: 'error',
    errorMessage: 'Please enter a valid email address.',
    onChangeText: () => { },
  },
};

export const WithRightSlot: Story = {
  args: {
    label: 'Account',
    value: '',
    placeholderText: 'Enter account',
    variant: 'default',
    rightSlot: <AccountCircleOutlined color={tokens.colorTextPrimary} />,
    onChangeText: () => { },
  },
};

export const PasswordType: Story = {
  args: {
    label: 'Password',
    value: 'secret123',
    inputType: 'password',
    variant: 'default',
    onChangeText: () => { },
  },
};

export const VariantMatrix: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <html.div style={storyStyles.container}>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Default Variant</html.div>
        <html.div style={storyStyles.grid}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Empty / Placeholder</html.div>
            <InputField
              label="Username"
              value=""
              placeholderText="e.g. janesmith"
              onChangeText={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>With Value</html.div>
            <InputField
              label="Username"
              value="janesmith"
              onChangeText={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>With Icon (Slot)</html.div>
            <InputField
              label="Verified account"
              value="harrisaar"
              rightSlot={<VerifiedUser color={tokens.colorPrimary} />}
              onChangeText={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Password type</html.div>
            <InputField
              label="Secret key"
              value="my-secret-key"
              inputType="password"
              onChangeText={() => { }}
            />
          </html.div>
        </html.div>
      </html.div>

      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Error Variant</html.div>
        <html.div style={storyStyles.grid}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error without message</html.div>
            <InputField
              label="Email"
              value="not-an-email"
              variant="error"
              onChangeText={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error with message</html.div>
            <InputField
              label="Email"
              value="not-an-email"
              variant="error"
              errorMessage="Must be a valid email address"
              onChangeText={() => { }}
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>Error with Icon</html.div>
            <InputField
              label="Email"
              value="not-an-email"
              variant="error"
              errorMessage="This field is required"
              rightSlot={<DoneAll color={tokens.colorSurfaceError} />}
              onChangeText={() => { }}
            />
          </html.div>
        </html.div>
      </html.div>
    </html.div>
  ),
};

