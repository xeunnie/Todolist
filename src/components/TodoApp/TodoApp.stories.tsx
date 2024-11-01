import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoApp from './TodoApp';

export default {
    title: 'App/TodoApp',
    component: TodoApp,
} as Meta;

const Template: StoryFn = (args) => <TodoApp {...args} />;

export const Default = Template.bind({});
Default.args = {};