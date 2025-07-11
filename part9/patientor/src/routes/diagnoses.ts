import express from 'express';
import { Response } from 'express';

import service from '../services/diagnosesService';

import { Diagnosis } from '../types';

const router = express.Router();

// Response is a generic type that allows us to specify the type of data we expect to send back
router.get('/', (_req, res: Response<Diagnosis[]>) => {
    res.send(service.getEntries());
});

export default router;