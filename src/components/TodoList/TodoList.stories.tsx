import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoList from './TodoList';
// import { Todo } from '../../types';

export default {
    title: 'Components/TodoList',
    component: TodoList,
} as Meta;

const Template: StoryFn<typeof TodoList> = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    todos: [],
    onToggleTodo: () => {},
    onDeleteTodo: () => {},
};

export const WithItems = Template.bind({});
WithItems.args = {
    todos: [
        { id: 1, text: 'Learn Storybook', completed: false },
        { id: 2, text: 'Build Todo List', completed: true },
    ],
    onToggleTodo: () => {},
    onDeleteTodo: () => {},
};