// rule of dumbs: try to use import first instead of require, 
// if it doesn't work, use require and read the suggested VScode fix
import express from 'express';
import { parseArgument } from './utils';


const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

import { calculateBmi } from './bmiCalculator';
app.get('/bmi', (req, res) => {
    try {
        const height = parseArgument(req.query["height"] as string);
        const weight = parseArgument(req.query["weight"] as string);
        const result = calculateBmi(height, weight);
        return res.json({
            weight,
            height,
            bmi: result + " range"
        });
    } catch {
        return res.status(400).send({ error: 'malformatted parameters' });
    }
});

import { calculateExercises } from './exerciseCalculator';

app.post('/exercises', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { daily_exercises, target } = req.body;

        if (!daily_exercises || !target) {
            return res.status(400).send({ error: 'parameters missing' });
        }

        if (!Array.isArray(daily_exercises)) {
            throw new Error();
        }

        const daily_exercises_array: number[] = daily_exercises.map((exercise: unknown) => {
            return parseArgument(exercise as string);
        });

        const result = calculateExercises(daily_exercises_array, parseArgument(target as string));
        return res.json(result);
    } catch {
        return res.status(400).send({ error: 'malformatted parameters' });
    }
});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});