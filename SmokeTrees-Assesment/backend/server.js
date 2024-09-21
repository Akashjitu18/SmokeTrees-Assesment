import express from 'express';
import bodyParser from 'body-parser';
import connectDb from './db/connectDb.js';
import userRoutes from './routes/UserRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

connectDb();

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
