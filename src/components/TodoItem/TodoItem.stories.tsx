import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoItem from './TodoItem';

export default {
    title: 'Components/TodoItem',
    component: TodoItem,
} as Meta;

const Template: StoryFn<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Example Task',
    completed: false,
    onToggle: () => {},
    onDelete: () => {},
};

export const Completed = Template.bind({});
Completed.args = {
    text: 'Completed Task',
    completed: true,
    onToggle: () => {},
    onDelete: () => {},
};