import express from 'express';
import routes from './routes/apis/user';

const app = express();
const port = 3000;

app.use('/user', routes);

app.listen(port, () => console.log('server is live on port', port));

export default app;
