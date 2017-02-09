import express from 'express';
import React from 'react'
import {getHome} from '../controllers/pages/index';

const router = express.Router();

router.get('', getHome);


module.exports = router;