import * as express from 'express';
import apiRouter from './routes';
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


//production mode
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname + '/public/index.html'));
    })
}

app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
