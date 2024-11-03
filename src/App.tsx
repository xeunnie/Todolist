import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Container } from '@mui/material';
import TodoApp from './components/TodoApp/TodoApp';

const App: React.FC = () => {
    useEffect(() => {
        ReactGA.initialize('YOUR_GA_ID');
        ReactGA.send('pageview');
    }, []);
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', paddingTop: '20px' }}>
            <TodoApp />
        </Container>
    );
};

export default App;