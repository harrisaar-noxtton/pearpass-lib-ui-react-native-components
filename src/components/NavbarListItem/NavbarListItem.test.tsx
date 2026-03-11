import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { NavbarListItem } from './NavbarListItem'

jest.mock('./NavbarListItem.styles', () => ({
  styles: {
    root: {},
    selected: {},
    variantDefault: {},
    variantSecondary: {},
    variantDestructive: {},
    icon: {},
    iconSize: () => ({}),
    label: {},
    count: {},
    iconOnly: () => ({})
  }
}))

jest.mock('./NavbarListItem.config', () => ({
  ICON_SIZE: 20,
  variantStyleMap: {
    default: {},
    secondary: {},
    destructive: {}
  }
}))

const DummyIcon = ({ width, height }: { width?: number; height?: number }) => {
  void width
  void height
  return null
}

describe('NavbarListItem', () => {
  it('renders label correctly', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<NavbarListItem label="All Items" />)
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with icon and count', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <NavbarListItem icon={<DummyIcon />} label="All Items" count={49} />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders icon only', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<NavbarListItem icon={<DummyIcon />} />)
    })

    const button = component!.root.findByType('button')
    expect(button.children.length).toBe(1)
  })

  it('renders label only', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<NavbarListItem label="Settings" />)
    })

    const button = component!.root.findByType('button')
    expect(button.children.length).toBe(1)
  })

  it('renders label with count', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <NavbarListItem label="All Items" count={49} />
      )
    })

    const button = component!.root.findByType('button')
    expect(button.children.length).toBe(2)
  })

  it('triggers onClick when clicked', () => {
    const onClick = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <NavbarListItem label="All Items" onClick={onClick} />
      )
    })

    const button = component!.root.findByType('button')
    act(() => {
      button.props.onClick?.({})
    })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies selected state correctly', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<NavbarListItem label="All Items" selected />)
    })

    expect(component!.toJSON()).toMatchSnapshot()

    const button = component!.root.findByType('button')
    expect(button.props['aria-selected']).toBe(true)
  })

  it('renders secondary variant', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <NavbarListItem label="Logins" variant="secondary" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders destructive variant', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <NavbarListItem label="Delete Item" variant="destructive" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })
})
