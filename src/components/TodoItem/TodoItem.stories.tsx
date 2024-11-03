import { Meta, StoryObj } from '@storybook/react';
import TodoItem from './TodoItem';

const meta: Meta<typeof TodoItem> = {
    title: 'Components/TodoItem',
    component: TodoItem,
    argTypes: {
        text: { control: 'text' },
        completed: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
    args: {
        text: 'Sample Todo',
        completed: false,
    },
};

export const Completed: Story = {
    args: {
        text: 'Completed Todo',
        completed: true,
    },
};