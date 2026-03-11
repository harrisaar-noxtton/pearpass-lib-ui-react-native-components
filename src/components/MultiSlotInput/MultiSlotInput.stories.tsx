import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { html, css } from 'react-strict-dom';
import { MultiSlotInput } from './MultiSlotInput';
import { tokens } from '../../theme/tokens.css';

const meta: Meta<typeof MultiSlotInput> = {
  title: 'Components/MultiSlotInput',
  component: MultiSlotInput,
  argTypes: {
    label: { control: 'text' },
    placeholderText: { control: 'text' },
    addButtonLabel: { control: 'text' },
    errorMessage: { control: 'text' },
    maxSlots: { control: { type: 'number', min: 1 } },
    values: { control: false },
    onChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSlotInput>;

// ---------------------------------------------------------------------------
// Stateful wrapper — Storybook args are immutable, so we wrap with local state
// ---------------------------------------------------------------------------
const StatefulMultiSlotInput = (args: React.ComponentProps<typeof MultiSlotInput>) => {
  const [values, setValues] = React.useState<string[]>(args.values ?? ['']);
  return <MultiSlotInput {...args} values={values} onChange={setValues} />;
};

// ---------------------------------------------------------------------------
// Story styles
// ---------------------------------------------------------------------------
const storyStyles = css.create({
  container: {
    padding: tokens.spacing24,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing24,
    maxWidth: '560px',
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
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary,
  },
});

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: (args) => (
    <html.div style={storyStyles.container}>
      <StatefulMultiSlotInput {...args} />
    </html.div>
  ),
  args: {
    label: 'Website',
    values: [''],
    placeholderText: 'https://example.com',
    addButtonLabel: 'Add another website',
  },
};

export const WithPrefilledValues: Story = {
  render: (args) => (
    <html.div style={storyStyles.container}>
      <StatefulMultiSlotInput {...args} />
    </html.div>
  ),
  args: {
    label: 'Email',
    values: ['alice@example.com', 'bob@example.com'],
    placeholderText: 'Enter email address',
    addButtonLabel: 'Add another email',
  },
};

export const ErrorVariant: Story = {
  render: (args) => (
    <html.div style={storyStyles.container}>
      <StatefulMultiSlotInput {...args} />
    </html.div>
  ),
  args: {
    label: 'Website',
    values: ['not-a-url'],
    placeholderText: 'https://example.com',
    addButtonLabel: 'Add another website',
    errorMessage: 'Invalid URL. Please enter a valid website.',
  },
};

export const MaxSlots: Story = {
  render: (args) => (
    <html.div style={storyStyles.container}>
      <StatefulMultiSlotInput {...args} />
    </html.div>
  ),
  args: {
    label: 'Phone number',
    values: [''],
    placeholderText: '+1 555 000 0000',
    addButtonLabel: 'Add another number',
    maxSlots: 3,
  },
};

export const VariantMatrix: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const WebsitesDemo = () => {
      const [websites, setWebsites] = React.useState<string[]>(['https://mysite.io']);
      return (
        <MultiSlotInput
          label="Website"
          values={websites}
          onChange={setWebsites}
          placeholderText="https://example.com"
          addButtonLabel="Add another website"
        />
      );
    };

    const EmailsDemo = () => {
      const [emails, setEmails] = React.useState<string[]>(['']);
      return (
        <MultiSlotInput
          label="Email address"
          values={emails}
          onChange={setEmails}
          placeholderText="user@example.com"
          addButtonLabel="Add another email"
        />
      );
    };

    const ErrorDemo = () => {
      const [values, setValues] = React.useState<string[]>(['bad-value', '']);
      return (
        <MultiSlotInput
          label="URL"
          values={values}
          onChange={setValues}
          placeholderText="https://"
          addButtonLabel="Add another URL"
          errorMessage="At least one URL is invalid."
        />
      );
    };

    const MaxDemo = () => {
      const [values, setValues] = React.useState<string[]>(['one', 'two', 'three']);
      return (
        <MultiSlotInput
          label="Tag"
          values={values}
          onChange={setValues}
          placeholderText="My tag"
          addButtonLabel="Add another tag"
          maxSlots={3}
        />
      );
    };

    return (
      <html.div style={storyStyles.container}>
        <html.div style={storyStyles.section}>
          <html.div style={storyStyles.sectionTitle}>Default — with value</html.div>
          <html.div style={storyStyles.caption}>
            One pre-filled slot; click "+ Add another" to grow the list
          </html.div>
          <WebsitesDemo />
        </html.div>

        <html.div style={storyStyles.section}>
          <html.div style={storyStyles.sectionTitle}>Empty placeholder state</html.div>
          <html.div style={storyStyles.caption}>
            Starts empty; remove is disabled when only one slot remains
          </html.div>
          <EmailsDemo />
        </html.div>

        <html.div style={storyStyles.section}>
          <html.div style={storyStyles.sectionTitle}>Error variant</html.div>
          <html.div style={storyStyles.caption}>
            All slots adopt the error border colour
          </html.div>
          <ErrorDemo />
        </html.div>

        <html.div style={storyStyles.section}>
          <html.div style={storyStyles.sectionTitle}>Max slots (3)</html.div>
          <html.div style={storyStyles.caption}>
            "Add" button is disabled once maxSlots is reached
          </html.div>
          <MaxDemo />
        </html.div>
      </html.div>
    );
  },
};
