import { useState } from 'react';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return { todos, addTodo, toggleTodo, deleteTodo };
};

export default useTodos;