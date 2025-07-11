import { parseArgument } from './utils';


const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / ((height / 100) ** 2);

    let category: string;
    if (bmi < 16) {
        category = "Underweight";
    } else if (bmi < 17) {
        category = "Underweight";
    } else if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Overweight";
    } else if (bmi < 35) {
        category = "Obese";
    } else {
        category = "Obese";
    }
    return category;

};

// like python's if __name__ == '__main__':
// this is used to avoid run the code when the module is imported
if (require.main === module) {
    const argv = process.argv.slice(2);
    if (argv.length !== 2) {
        console.log("Please provide exactly two arguments: height in cm and weight in kg.");
        process.exit(1);
    }
    try {
        const height = parseArgument(argv[0] as string);
        const weight = parseArgument(argv[1] as string);
        const bmiCategory = calculateBmi(height, weight);
        console.log(bmiCategory);
    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);
        process.exit(1);
    }
}


export { calculateBmi };