import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoList from './TodoList';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default {
    title: 'Components/TodoList',
    component: TodoList,
} as Meta<typeof TodoList>;

const Template: StoryFn<typeof TodoList> = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    todos: [],
    toggleComplete: (id: number) => console.log(`Toggled todo with id ${id}`),
    deleteTodo: (id: number) => console.log(`Deleted todo with id ${id}`),
};

export const WithItems = Template.bind({});
WithItems.args = {
    todos: [
        { id: 1, text: 'Learn Storybook', completed: false },
        { id: 2, text: 'Build Todo List', completed: true },
    ],
    toggleComplete: (id: number) => console.log(`Toggled todo with id ${id}`),
    deleteTodo: (id: number) => console.log(`Deleted todo with id ${id}`),
};