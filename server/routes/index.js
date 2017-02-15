// @flow
import express from 'express';
let router = express.Router();

router.use('/', require('./pages'));

export default router;