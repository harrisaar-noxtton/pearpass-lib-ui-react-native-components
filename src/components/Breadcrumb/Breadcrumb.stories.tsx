import type { Meta, StoryObj } from '@storybook/react';
import { css, html } from 'react-strict-dom';
import { Breadcrumb } from './Breadcrumb';
import { Button } from '../Button';
import { tokens } from '../../theme/tokens.css';
import { AccountCircleFilled, AccountCircleOutlined } from '../../icons';

const storyStyles = css.create({
    wrapper: {
        maxWidth: 420,
        width: '100%',
    },
    stack: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing20,
        width: '100%',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing12,
    },
    sectionTitle: {
        fontFamily: tokens.fontPrimary,
        fontSize: tokens.fontSize12,
        fontWeight: tokens.weightMedium,
        color: '#999',
    },
});

const meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <html.div style={storyStyles.wrapper}>
                <Story />
            </html.div>
        ),
    ],
    argTypes: {
        items: {
            control: 'object',
        },
        actions: {
            control: false,
        },
    },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        items: ['All Items', 'All Folders'],
    },
};

export const WithActions: Story = {
    args: {
        items: ['All Items', 'All Folders'],
    },
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <Breadcrumb
            items={['All Items', 'All Folders']}
            actions={
                <>
                    <Button
                        variant="tertiary"
                        size="small"
                        aria-label="Select items"
                        iconBefore={<AccountCircleFilled color="white" />}
                    />
                    <Button
                        variant="tertiary"
                        size="small"
                        aria-label="Filter"
                        iconBefore={<AccountCircleOutlined color="white" />}
                    />
                </>
            }
        />
    ),
};

export const Variants: Story = {
    args: {
        items: ['All Items'],
    },
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <html.div style={storyStyles.stack}>
            <html.div style={storyStyles.section}>
                <html.span style={storyStyles.sectionTitle}>Single item</html.span>
                <Breadcrumb items={['All Items']} />
            </html.div>
            <html.div style={storyStyles.section}>
                <html.span style={storyStyles.sectionTitle}>Two items</html.span>
                <Breadcrumb items={['All Items', 'All Folders']} />
            </html.div>
            <html.div style={storyStyles.section}>
                <html.span style={storyStyles.sectionTitle}>Three items</html.span>
                <Breadcrumb items={['All Items', 'All Folders', 'Work']} />
            </html.div>
            <html.div style={storyStyles.section}>
                <html.span style={storyStyles.sectionTitle}>With actions</html.span>
                <Breadcrumb
                    items={['All Items', 'All Folders']}
                    actions={
                        <>
                            <Button
                                variant="tertiary"
                                size="small"
                                aria-label="Select items"
                                iconBefore={<AccountCircleFilled color="white" />}
                            />
                            <Button
                                variant="tertiary"
                                size="small"
                                aria-label="Filter"
                                iconBefore={<AccountCircleOutlined color="white" />}
                            />
                        </>
                    }
                />
            </html.div>
        </html.div>
    ),
};
