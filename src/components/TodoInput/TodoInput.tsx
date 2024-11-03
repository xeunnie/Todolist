import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoInput.scss';

export interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleAdd = () => {
        if (todo.trim()) {
            addTodo(todo);
            setTodo('');
            toast.success('Todo added successfully!');
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Add Your Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleAdd()}
                className="todo-input-field"
            />
            <button onClick={handleAdd} className="todo-input-button">Add</button>
            <ToastContainer />
        </div>
    );
}

export default TodoInput;