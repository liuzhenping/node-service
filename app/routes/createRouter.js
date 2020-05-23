import express from 'express'

import articleRequestAPI from '../api/articleRequestAPI';

const router = express.Router();

router.use('/articles', articleRequestAPI);

export default router