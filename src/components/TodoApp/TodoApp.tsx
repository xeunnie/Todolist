import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
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

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onAddTodo={addTodo} />
            <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;