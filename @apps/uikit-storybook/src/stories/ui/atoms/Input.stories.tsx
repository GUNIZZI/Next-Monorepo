import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '@ui/atoms';
import { Mail, LucideProps } from 'lucide-react';
import React from 'react';

const meta = {
    title: 'UI/Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: [
                'text',
                'password',
                'email',
                'number',
                'tel',
                'search',
                'file',
            ],
            description: '입력 필드의 타입을 지정합니다',
        },
        variant: {
            control: 'select',
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
            ],
            description: '입력 필드의 스타일 변형을 지정합니다',
            defaultValue: 'default',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        placeholder: {
            control: 'text',
            description: '입력 필드의 placeholder 텍스트를 지정합니다',
        },
        disabled: {
            control: 'boolean',
            description: '입력 필드의 비활성화 여부를 지정합니다',
        },
        className: {
            control: 'text',
            description: '추가적인 CSS 클래스를 지정합니다',
        },
        id: {
            control: 'text',
            description: '입력 필드의 id를 지정합니다',
        },
        required: {
            control: 'boolean',
            description: '필수 입력 여부를 지정합니다',
        },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // type: 'text',
        // placeholder: '이름을 입력하세요',
    },
};

export const WithError: Story = {
    args: {
        type: 'text',
        error: '유효하지 않은 이메일 주소입니다',
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
    },
};

export const WithLabel: Story = {
    args: {
        type: 'text',
        placeholder: '',
        label: 'E-Mail',
    },

    // render: () => (
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //         <label htmlFor="email">이메일</label>
    //         {/* <Label htmlFor="email">Email</Label> */}
    //         <Input type="email" id="email" placeholder="이메일을 입력하세요" />
    //     </div>
    // ),
};
