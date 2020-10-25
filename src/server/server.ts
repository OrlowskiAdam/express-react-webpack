import * as express from 'express';
import apiRouter from './routes';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
