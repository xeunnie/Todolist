import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoInput, { TodoInputProps } from './TodoInput';

export default {
    title: 'Components/TodoInput',
    component: TodoInput,
    argTypes: {
        addTodo: { action: 'addTodo' },
    },
} as Meta<typeof TodoInput>;

const Template: StoryFn<TodoInputProps> = (args) => <TodoInput {...args} />;

export const Default = Template.bind({});
Default.args = {};