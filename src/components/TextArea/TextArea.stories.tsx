import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { css, html } from 'react-strict-dom'
import { tokens } from '../../theme/tokens.css'
import { TextArea } from './TextArea'

const INCLUDE_PROPS = [
  'label',
  'placeholder',
  'error',
  'disabled',
  'readOnly',
  'rows',
  'maxLength',
  'defaultValue',
  'onChange',
  'onFocus',
  'onBlur'
]

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: INCLUDE_PROPS
    }
  },
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' }
  }
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

const storyStyles = css.create({
  container: {
    width: 400,
    padding: tokens.spacing24,
    backgroundColor: tokens.colorSurfacePrimary,
    borderRadius: tokens.radius16
  },
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing20
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing12,
    width: 360
  },
  sectionTitle: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    fontWeight: tokens.weightMedium,
    color: tokens.colorTextPrimary,
    textTransform: 'capitalize'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: tokens.spacing20,
    flexWrap: 'wrap'
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing8,
    flex: 1,
    minWidth: 280
  },
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary,
    textTransform: 'capitalize'
  }
})

export const Playground: Story = {
  decorators: [
    (Story) => (
      <html.div style={storyStyles.container}>
        <Story />
      </html.div>
    )
  ],
  args: {
    label: 'Description',
    placeholder: 'Write something…',
    rows: 4
  }
}

export const StateMatrix: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => (
    <html.div style={storyStyles.stack}>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>States</html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>default</html.div>
            <TextArea label="Label" placeholder="Placeholder…" />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>with value</html.div>
            <TextArea label="Label" defaultValue="Some content here" />
          </html.div>
        </html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>error</html.div>
            <TextArea
              label="Label"
              defaultValue="Hello!"
              error="This field requires at least 20 characters."
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>disabled</html.div>
            <TextArea label="Label" defaultValue="Cannot edit this." disabled />
          </html.div>
        </html.div>
        <html.div style={storyStyles.row}>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>read-only</html.div>
            <TextArea
              label="Label"
              defaultValue="You can read this."
              readOnly
            />
          </html.div>
          <html.div style={storyStyles.cell}>
            <html.div style={storyStyles.caption}>no label</html.div>
            <TextArea placeholder="No label above…" />
          </html.div>
        </html.div>
      </html.div>
    </html.div>
  )
}
