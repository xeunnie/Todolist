import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoApp from './components/TodoApp/TodoApp';

const App: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Typography variant="h3" gutterBottom>
                Todo Application
            </Typography>
            <TodoApp />
        </Container>
    );
};

export default App;