import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@ui/atoms';
import { Mail, LucideProps } from 'lucide-react';
import React from 'react';

const meta = {
    title: 'UI/Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
        variant: {
            control: 'select',
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
                'link',
            ],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
        size: 'default',
    },
};

export const WithICON = {
    args: {
        // variant: 'secondary',
        size: 'default',
        children: (
            <>
                {React.createElement(Mail as React.ComponentType<LucideProps>)}
                Email
            </>
        ),
    },
};
