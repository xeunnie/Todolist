import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={() => onToggleTodo(todo.id)}
                    onDelete={() => onDeleteTodo(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;