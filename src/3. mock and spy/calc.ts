
export const add = (a: number, b: number) => a + b;

export const risky = (x: number) => {
    if (x < 0) throw new Error('bad');
    return x * 2;
};