import express from 'express';
import { Response } from 'express';

import service from '../services/patientsService';

import { NonSensitivePatient } from '../types';
import toNewPatient from '../utils';

const router = express.Router();

// Response is a generic type that allows us to specify the type of data we expect to send back
router.get('/', (_req, res: Response<NonSensitivePatient[]>) => {
    res.send(service.getEntries());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatient(req.body);

        const addedEntry = service.addPatient(newPatientEntry);
        res.json(addedEntry);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('Something went wrong');
        }
    }
});

export default router;