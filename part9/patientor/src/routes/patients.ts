import express from 'express';
import { Request, Response, NextFunction } from 'express';

import service from '../services/patientsService';

import { NonSensitivePatient, NewPatient, Patient } from '../types';
import { NewPatientSchema } from '../utils';
import { z } from 'zod';

const router = express.Router();

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
    try {
        NewPatientSchema.parse(req.body);
        next();
    } catch (error: unknown) {
        next(error);
    }
};

const errorHandler = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (error instanceof z.ZodError) {
        res.status(400).send(error.issues.map(issue => issue.message).join(", ") || "Invalid data");
    } else {
        res.status(400).send("Something went wrong");
    }
};


// Response is a generic type that allows us to specify the type of data we expect to send back
router.get('/', (_req, res: Response<NonSensitivePatient[]>) => {
    res.send(service.getEntries());
});



router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
    const addedEntry = service.addPatient(req.body);
    res.json(addedEntry);
});

router.use(errorHandler);

export default router;