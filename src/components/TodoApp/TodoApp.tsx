import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import Header from '../Header/Header';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import '../../styles/App.scss';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [nextId, setNextId] = useState(1);

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: nextId, text, completed: false };
        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
    };

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const loadMoreTodos = () => {
        if (todos.length >= 50) { 
            setHasMore(false);
            return;
        }

        const newTodos = Array.from({ length: 10 }, (_, index) => ({
            id: todos.length + index + 1,
            text: `New Todo ${todos.length + index + 1}`,
            completed: false,
        }));

        setTodos((prevTodos) => [...prevTodos, ...newTodos]);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Header />
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}  hasMore={hasMore} loadMoreTodos={loadMoreTodos}/>
            </div>
        </ThemeProvider>
    );
}

export default App;