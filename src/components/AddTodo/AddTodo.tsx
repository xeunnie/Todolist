import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTodoProps {
    onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };

    return (
        <Box display="flex" justifyContent="center" gap={2} marginTop={2}>
            <TextField
                label="Add a new task"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;