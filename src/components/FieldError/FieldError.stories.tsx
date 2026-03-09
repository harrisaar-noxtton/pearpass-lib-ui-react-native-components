import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { css, html } from 'react-strict-dom'
import { tokens } from '../../theme/tokens.css'
import { FieldError } from './FieldError'

const meta = {
  title: 'Components/FieldError',
  component: FieldError,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['children']
    }
  }
} satisfies Meta<typeof FieldError>

export default meta
type Story = StoryObj<typeof meta>

const storyStyles = css.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing12,
    width: 360
  },
  caption: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize12,
    color: tokens.colorTextSecondary
  }
})

export const Playground: Story = {
  args: {
    children: 'This field is required'
  }
}

export const Examples: Story = {
  args: {
    children: 'This field is required.'
  },
  parameters: {
    controls: { disable: true }
  },
  render: () => (
    <html.div style={storyStyles.stack}>
      <html.div style={storyStyles.caption}>Short message</html.div>
      <FieldError>This field is required.</FieldError>

      <html.div style={storyStyles.caption}>Long message</html.div>
      <FieldError>
        The password entered doesn't match the one used to encrypt your file.
        Please check your credentials and try again.
      </FieldError>
    </html.div>
  )
}
