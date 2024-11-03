import { http } from 'msw';

export const handlers = [
    http.get('/api/todos', (req, res) => {
        return res.json([
            { id: 1, text: 'Learn Zustand', completed: false },
            { id: 2, text: 'Set up MSW', completed: true },
        ]);
    }),

    http.post('/api/todos', async (req, res) => {
        const { text, completed } = await req.json<{ text: string; completed: boolean }>();
        return res.json({
            id: Date.now(),
            text,
            completed,
        });
    }),
];