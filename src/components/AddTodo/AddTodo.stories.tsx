import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AddTodo from './AddTodo';

export default {
    title: 'Components/AddTodo',
    component: AddTodo,
} as Meta;

const Template: StoryFn<typeof AddTodo> = (args) => <AddTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
    onAddTodo: () => alert('Todo added!'),
};