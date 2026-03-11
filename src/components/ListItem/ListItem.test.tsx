import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { ListItem } from './ListItem'

jest.mock('./ListItem.styles', () => ({
  styles: {
    root: {},
    iconContainer: {},
    iconSize: () => ({}),
    content: {},
    title: {},
    subtitle: {},
    subtitleDividerContainer: {},
    subtitleSegment: {},
    dividerLine: {},
    subtitleDividerContainerVertical: {},
    dividerLineHorizontal: {},
    rightContainer: {},
    mobile: {},
    selected: {},
    showDivider: {}
  }
}))

jest.mock('./ListItem.config', () => ({
  ICON_SIZE: 32
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

const DummyButton = () => <button>Action</button>

describe('ListItem', () => {
  it('renders title correctly', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<ListItem title="My Item" />)
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with icon', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem icon={<DummyIcon />} title="My Item" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with string subtitle', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem title="My Item" subtitle="Some subtitle" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with object subtitle (primary + secondary)', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem
          title="My Item"
          subtitle={{ primary: 'user@email.com', secondary: 'Updated today' }}
        />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with right element', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem title="My Item" rightElement={<DummyButton />} />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders title only without icon or subtitle', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<ListItem title="Title Only" />)
    })

    const root = component!.root.findByType('div')
    // root > content > title
    const contentDiv = root.children[0]
    expect(typeof contentDiv).toBe('object')
  })

  it('renders icon, title, subtitle, and right element together', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem
          icon={<DummyIcon />}
          title="Full Item"
          subtitle="Details here"
          rightElement={<DummyButton />}
        />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with testID', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem title="My Item" testID="list-item-1" />
      )
    })

    const root = component!.root.findByType('div')
    expect(root.props['data-testid']).toBe('list-item-1')
  })

  it('does not render icon container when icon is not provided', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<ListItem title="No Icon" />)
    })

    const root = component!.root.findByType('div')
    // Should have only content div (no icon span, no right container)
    expect(root.children.length).toBe(1)
  })

  it('does not render right container when rightElement is not provided', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<ListItem title="No Right" />)
    })

    const root = component!.root.findByType('div')
    expect(root.children.length).toBe(1)
  })

  it('renders icon and right element together', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem
          icon={<DummyIcon />}
          title="With Both"
          rightElement={<DummyButton />}
        />
      )
    })

    const root = component!.root.findByType('div')
    // icon span + content div + right container div
    expect(root.children.length).toBe(3)
  })

  it('renders with custom iconSize', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem icon={<DummyIcon />} iconSize={48} title="Custom Icon Size" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with showDivider', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem title="With Divider" showDivider />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders vertical subtitle layout', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem
          title="Vertical"
          subtitle={{ primary: 'Top', secondary: 'Bottom' }}
          subtitleLayout="vertical"
        />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('applies selected state correctly', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem title="Selected Item" selected />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders object subtitle with divider', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <ListItem
          title="Divided"
          subtitle={{ primary: 'Left', secondary: 'Right' }}
        />
      )
    })

    const tree = component!.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
