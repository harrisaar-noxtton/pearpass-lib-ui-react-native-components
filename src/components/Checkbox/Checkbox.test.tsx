import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { Checkbox } from './Checkbox'

jest.mock('./Checkbox.styles', () => ({
  styles: {
    root: {},
    details: {},
    description: {},
    checkboxBase: {},
    checkboxUnchecked: {},
    checkboxChecked: {},
    checkboxDisabled: {},
    checkIconWrapper: {}
  }
}))

jest.mock('../../icons', () => ({
  Check: () => null
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

describe('Checkbox', () => {
  it('renders without label or description', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(<Checkbox aria-label="Accept terms" />)
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders with label and description', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox
          label="Accept terms"
          description="I agree to the terms and conditions"
        />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders checked state', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={true} label="Accept terms" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders unchecked state', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={false} label="Accept terms" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('renders disabled state', () => {
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={true} disabled label="Accept terms" />
      )
    })

    expect(component!.toJSON()).toMatchSnapshot()
  })

  it('calls onChange with toggled value when clicked', () => {
    const onChange = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={false} onChange={onChange} label="Accept terms" />
      )
    })

    const button = component!.root.findByProps({ role: 'checkbox' })

    act(() => {
      button.props.onClick()
    })

    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('does not call onChange when disabled', () => {
    const onChange = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox
          checked={false}
          onChange={onChange}
          disabled
          label="Accept terms"
        />
      )
    })

    const button = component!.root.findByProps({ role: 'checkbox' })

    act(() => {
      button.props.onClick?.()
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  it('toggles from checked to unchecked', () => {
    const onChange = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={true} onChange={onChange} label="Accept terms" />
      )
    })

    const button = component!.root.findByProps({ role: 'checkbox' })

    act(() => {
      button.props.onClick()
    })

    expect(onChange).toHaveBeenCalledWith(false)
  })

  it('calls onChange when the label is clicked', () => {
    const onChange = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox checked={false} onChange={onChange} label="Accept terms" />
      )
    })

    const labelArea = component!.root.findAll(
      (node) => typeof node.props.onClick === 'function' && !node.props.role
    )[0]

    act(() => {
      labelArea.props.onClick()
    })

    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('does not call onChange via label when disabled', () => {
    const onChange = jest.fn()
    let component: renderer.ReactTestRenderer

    act(() => {
      component = renderer.create(
        <Checkbox
          checked={false}
          onChange={onChange}
          disabled
          label="Accept terms"
        />
      )
    })

    // When disabled, the details div has onClick={undefined}, so no
    // role-free clickable node exists — the label area is inert
    const labelAreaHandlers = component!.root.findAll(
      (node) => typeof node.props.onClick === 'function' && !node.props.role
    )

    expect(labelAreaHandlers).toHaveLength(0)
    expect(onChange).not.toHaveBeenCalled()
  })
})
