import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlertMessage } from './AlertMessage';
import AccountCircleSharp from '../../icons/components/AccountCircleSharp';

const meta: Meta<typeof AlertMessage> = {
  title: 'Components/AlertMessage',
  component: AlertMessage,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'big'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertMessage>;

export const BigSuccess: Story = {
  args: {
    variant: 'success',
    size: 'big',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color="#B0D944" />,
  },
};

export const MediumError: Story = {
  args: {
    variant: 'error',
    size: 'medium',
    title: 'Operation Failed',
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color="#B0D944" />,
  },
};

export const SmallSuccess: Story = {
  args: {
    variant: 'success',
    size: 'small',
    title: 'Operation Successful', // Won't show up based on comp logic
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color="#B0D944" />,
  },
};

export const WithActionBig: Story = {
  args: {
    variant: 'error',
    size: 'big',
    title: 'Operation Failed',
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color="#D13B3D" />,
    actionText: 'Retry',
    onAction: () => console.log('Retry clicked!'),
  },
};

export const WithActionMedium: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    icon: <AccountCircleSharp color="#B0D944" />,
    actionText: 'View Details',
    onAction: () => console.log('View details clicked!'),
  },
};

export const WithActionSmall: Story = {
  args: {
    variant: 'success',
    size: 'small',
    title: 'Operation Failed', // Won't show up based on comp logic
    description: 'There was an error saving your changes. Please try again.',
    icon: <AccountCircleSharp color="#B0D944" />,
    actionText: 'Retry',
    onAction: () => console.log('Retry clicked!'),
  },
};
