import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FixedSizeList as List } from 'react-window';
import TodoItem from '../TodoItem/TodoItem';
import { useTodoStore } from '../../stores/todoStore';

interface TodoListProps {
    loadMoreTodos: () => void;
    hasMore: boolean;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ loadMoreTodos, hasMore, toggleComplete, deleteTodo }) => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <InfiniteScroll
            dataLength={todos.length}
            next={loadMoreTodos}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}>No more todos to load</p>}
            scrollableTarget="scrollableDiv"
        >
            <List
                height={400}
                itemCount={todos.length}
                itemSize={50}
                width="100%"
            >
                {({ index, style }) => {
                    const todo = todos[index];
                    return (
                        <div style={style}>
                            <TodoItem
                                key={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                onToggle={() => toggleComplete(todo.id)}
                                onDelete={() => deleteTodo(todo.id)}
                            />
                        </div>
                    );
                }}
            </List>
        </InfiniteScroll>
    );
};

export default TodoList;