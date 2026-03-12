import type { Meta, StoryObj } from '@storybook/react'
import { css, html } from 'react-strict-dom'
import { Snackbar } from './Snackbar'
import { AccountCircleFilled } from '../../icons'

const INCLUDE_PROPS = ['text', 'icon', 'iconSize']

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: INCLUDE_PROPS
    }
  },
  argTypes: {
    text: { control: 'text' },
    iconSize: { control: { type: 'number' } },
    icon: { control: false }
  }
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

const storyStyles = css.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 24
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF'
  }
})

export const Playground: Story = {
  args: {
    text: 'Copied to Clipboard'
  },
  render: (args) => (
    <html.div style={storyStyles.container}>
      <Snackbar {...args} icon={<AccountCircleFilled color="#08090C" />} />
    </html.div>
  )
}

export const WithIcon: Story = {
  args: { text: 'Copied to Clipboard' },
  parameters: { controls: { disable: true } },
  render: () => (
    <html.div style={storyStyles.container}>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>With leading icon</html.div>
        <Snackbar
          icon={<AccountCircleFilled color="#08090C" />}
          text="Copied to Clipboard"
        />
      </html.div>
    </html.div>
  )
}

export const WithoutIcon: Story = {
  args: { text: 'Copied to Clipboard' },
  parameters: { controls: { disable: true } },
  render: () => (
    <html.div style={storyStyles.container}>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Without leading icon</html.div>
        <Snackbar text="Copied to Clipboard" />
      </html.div>
    </html.div>
  )
}

export const Variants: Story = {
  args: { text: 'Snackbar' },
  parameters: { controls: { disable: true } },
  render: () => (
    <html.div style={storyStyles.container}>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>With icon</html.div>
        <Snackbar
          icon={<AccountCircleFilled color="#08090C" />}
          text="Copied to Clipboard"
        />
      </html.div>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Without icon</html.div>
        <Snackbar text="Copied to Clipboard" />
      </html.div>
      <html.div style={storyStyles.section}>
        <html.div style={storyStyles.sectionTitle}>Long text</html.div>
        <Snackbar
          icon={<AccountCircleFilled color="#08090C" />}
          text="Your changes have been saved successfully"
        />
      </html.div>
    </html.div>
  )
}
