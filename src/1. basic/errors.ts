export function failIfNegative(n: number) {
    if (n < 0)
        throw new Error('Negative number!');
    return n;
}
