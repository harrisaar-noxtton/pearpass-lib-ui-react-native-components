import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { Snackbar } from './Snackbar'

jest.mock('./Snackbar.styles', () => ({
  styles: {
    root: {},
    iconContainer: {},
    iconSize: () => ({}),
    text: {}
  }
}))

jest.mock('./Snackbar.config', () => ({
  ICON_SIZE: 16
}))

jest.mock('../Text/Text.styles', () => ({
  styles: {
    textBase: {},
    variantLabel: {},
    variantBody: {},
    variantBodyEmphasized: {},
    variantCaption: {}
  }
}))

const DummyIcon = ({ width, height }: { width?: number; height?: number }) => {
  void width
  void height
  return null
}

describe('Snackbar', () => {
  it('renders text correctly', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<Snackbar text="Copied to Clipboard" />)
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with icon', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Snackbar icon={<DummyIcon />} text="Copied to Clipboard" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders without icon', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<Snackbar text="Action completed" />)
    })

    const root = component!.root.findByType('div')
    // Only text span, no icon container
    expect(root.children.length).toBe(1)
  })

  it('renders with icon and text', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Snackbar icon={<DummyIcon />} text="Saved" />
      )
    })

    const root = component!.root.findByType('div')
    // icon span + text span
    expect(root.children.length).toBe(2)
  })

  it('renders with testID', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Snackbar text="Test" testID="snackbar-1" />
      )
    })

    const root = component!.root.findByType('div')
    expect(root.props['data-testid']).toBe('snackbar-1')
  })

  it('has role status', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<Snackbar text="Done" />)
    })

    const root = component!.root.findByType('div')
    expect(root.props.role).toBe('status')
  })

  it('renders with custom iconSize', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Snackbar icon={<DummyIcon />} iconSize={24} text="Large icon" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })
})
