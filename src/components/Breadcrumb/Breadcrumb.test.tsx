import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Breadcrumb } from './Breadcrumb';

jest.mock('./Breadcrumb.styles', () => ({
    styles: {
        container: {},
        items: {},
        item: {},
        separator: {},
        actions: {},
    },
}));

jest.mock('../../icons', () => ({
    KeyboardArrowRightFilled: () => null,
}));

describe('Breadcrumb', () => {
    it('renders single item', () => {
        let component: renderer.ReactTestRenderer;

        act(() => {
            component = renderer.create(
                <Breadcrumb items={['All Items']} />
            );
        });

        expect(component!.toJSON()).toMatchSnapshot();
    });

    it('renders multiple items with separators', () => {
        let component: renderer.ReactTestRenderer;

        act(() => {
            component = renderer.create(
                <Breadcrumb items={['All Items', 'All Folders']} />
            );
        });

        expect(component!.toJSON()).toMatchSnapshot();
    });

    it('renders actions when provided', () => {
        let component: renderer.ReactTestRenderer;

        act(() => {
            component = renderer.create(
                <Breadcrumb
                    items={['All Items']}
                    actions={<button>Action</button>}
                />
            );
        });

        expect(component!.toJSON()).toMatchSnapshot();
    });
});
