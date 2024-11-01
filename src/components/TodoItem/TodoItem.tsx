import React from 'react';
import { Checkbox, IconButton, Typography, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';
import styled from 'styled-components';

interface TodoItemProps {
    text: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

const TodoItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const TodoItemText = styled(Typography)<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#9e9e9e' : 'inherit')};
`;

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle, onDelete }) => {
    return (
        <TodoItemContainer>
            <Box display="flex" alignItems="center">
                <Checkbox checked={completed} onChange={onToggle} />
                <TodoItemText completed={completed}>{text}</TodoItemText>
            </Box>
            <IconButton edge="end" color="secondary" onClick={onDelete}>
                <Delete />
            </IconButton>
        </TodoItemContainer>
    );
};

export default TodoItem;