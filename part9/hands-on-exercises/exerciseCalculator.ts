import { parseArgument } from './utils';


export type Rating = 1 | 2 | 3;

export interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: Rating;
    ratingDescription: string;
    target: number;
    average: number;
}


export const calculateExercises = (dailyExercises: number[], target: number): Result => {

    const periodLength = dailyExercises.length;
    const trainingDays = dailyExercises.filter(day => day > 0).length;
    const average = dailyExercises.reduce((sum, day) => sum + day, 0) / periodLength;

    let rating: Rating;
    let ratingDescription: string;

    if (average >= target) {
        rating = 3;
        ratingDescription = "Great job! You've met your target.";
    } else if (average >= target * 0.75) {
        rating = 2;
        ratingDescription = "Not bad, but you can do better.";
    } else {
        rating = 1;
        ratingDescription = "You need to work harder to meet your target.";
    }

    return {
        periodLength,
        trainingDays,
        success: average >= target,
        rating,
        ratingDescription,
        target,
        average
    };
};

if (require.main === module) {
    const argv = process.argv.slice(2);
    try {
        const inputValues = argv.map(arg => parseArgument(arg));

        if (inputValues.length < 2) {
            throw new Error("Not enough arguments provided.");
        }
        const target = inputValues[0] as number;
        const dailyExercises = inputValues.slice(1);

        const result = calculateExercises(dailyExercises, target);
        console.log(result);

    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);
        process.exit(1);
    }
}
