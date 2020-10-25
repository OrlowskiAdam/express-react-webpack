import * as express from 'express';

const router = express.Router();

router.get('/api/sup', (req, res, next) => {
    res.json({
        title: "Hello world!"
    });
});

export default router;