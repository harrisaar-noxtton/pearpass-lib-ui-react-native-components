import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { html, css } from 'react-strict-dom';
import { PasswordIndicator } from './PasswordIndicator';
import { tokens } from '../../theme/tokens.css';

const meta: Meta<typeof PasswordIndicator> = {
  title: 'Components/PasswordIndicator',
  component: PasswordIndicator,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['vulnerable', 'decent', 'strong', 'match'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordIndicator>;

const storyStyles = css.create({
  container: {
    padding: tokens.spacing24,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing24,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: tokens.spacing20,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing8,
    alignItems: 'center',
  },
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary,
    textTransform: 'capitalize',
  },
});

export const Vulnerable: Story = {
  args: {
    variant: 'vulnerable',
  },
};

export const Decent: Story = {
  args: {
    variant: 'decent',
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
  },
};

export const Match: Story = {
  args: {
    variant: 'match',
  },
};

export const VariantMatrix: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <html.div style={storyStyles.container}>
      <html.div style={storyStyles.grid}>
        <html.div style={storyStyles.cell}>
          <html.div style={storyStyles.caption}>Vulnerable</html.div>
          <PasswordIndicator variant="vulnerable" />
        </html.div>
        <html.div style={storyStyles.cell}>
          <html.div style={storyStyles.caption}>Decent</html.div>
          <PasswordIndicator variant="decent" />
        </html.div>
        <html.div style={storyStyles.cell}>
          <html.div style={storyStyles.caption}>Strong</html.div>
          <PasswordIndicator variant="strong" />
        </html.div>
        <html.div style={storyStyles.cell}>
          <html.div style={storyStyles.caption}>Match</html.div>
          <PasswordIndicator variant="match" />
        </html.div>
      </html.div>
    </html.div>
  ),
};

