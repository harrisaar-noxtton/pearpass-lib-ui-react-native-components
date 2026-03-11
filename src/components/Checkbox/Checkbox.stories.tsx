import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { css, html } from 'react-strict-dom'
import { Checkbox } from './Checkbox'
import { tokens } from '../../theme/tokens.css'
import { Text } from '../Text'

const INCLUDE_PROPS = [
  'checked',
  'label',
  'description',
  'disabled',
  'onChange'
]

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: INCLUDE_PROPS
    }
  },
  argTypes: {
    onChange: { action: 'changed' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const storyStyles = css.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing20
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing12
  },
  sectionTitle: {
    color: tokens.colorTextSecondary,
    textTransform: 'capitalize'
  }
})

export const Playground: Story = {
  args: {
    label: 'Label',
    description: 'Supporting description text',
    checked: false,
    disabled: false
  },
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked ?? false)
    React.useEffect(() => {
      setChecked(args.checked ?? false)
    }, [args.checked])
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(next) => {
          setChecked(next)
          args.onChange?.(next)
        }}
      />
    )
  }
}

export const States: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    const [checked, setChecked] = React.useState(false)

    return (
      <html.div style={storyStyles.stack}>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Interactive
          </Text>
          <Checkbox
            checked={checked}
            onChange={setChecked}
            label="Remember me"
            description="Stay signed in on this device"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Unchecked (static)
          </Text>
          <Checkbox
            checked={false}
            label="Remember me"
            description="Stay signed in on this device"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Checked (static)
          </Text>
          <Checkbox
            checked={true}
            label="Remember me"
            description="Stay signed in on this device"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Disabled unchecked
          </Text>
          <Checkbox
            checked={false}
            disabled
            label="Remember me"
            description="Stay signed in on this device"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Disabled checked
          </Text>
          <Checkbox
            checked={true}
            disabled
            label="Remember me"
            description="Stay signed in on this device"
          />
        </html.div>
      </html.div>
    )
  }
}

export const LabelVariants: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    const [withBoth, setWithBoth] = React.useState(false)
    const [labelOnly, setLabelOnly] = React.useState(false)
    const [noLabel, setNoLabel] = React.useState(false)

    return (
      <html.div style={storyStyles.stack}>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Label and description
          </Text>
          <Checkbox
            checked={withBoth}
            onChange={setWithBoth}
            label="Accept terms"
            description="I agree to the terms and conditions"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            Label only
          </Text>
          <Checkbox
            checked={labelOnly}
            onChange={setLabelOnly}
            label="Accept terms"
          />
        </html.div>
        <html.div style={storyStyles.section}>
          <Text variant="caption" style={storyStyles.sectionTitle}>
            No label
          </Text>
          <Checkbox
            checked={noLabel}
            onChange={setNoLabel}
            aria-label="Accept terms"
          />
        </html.div>
      </html.div>
    )
  }
}
