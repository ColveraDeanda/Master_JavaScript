import express from 'express';
import bodyParser from 'body-parser';

// Como se esta exportando con export default, podemos nombrar esto como queramos
import userRouter from './routes/users.js'

const app = express();
const PORT = 3000

app.use(bodyParser.json());

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('Heyyy...');
})

app.listen(PORT, () => console.log(`Running server on http://localhost:${PORT}/`));