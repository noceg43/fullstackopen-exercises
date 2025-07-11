
export const parseArgument = (arg: string): number => {
    const parsed = Number(arg);
    if (isNaN(parsed)) {
        throw new Error(`Invalid argument: ${arg}`);
    }
    return parsed;
}
