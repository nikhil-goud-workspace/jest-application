
// Partial mock: keep real module except the functions we override
jest.mock('./math', () => {
    const actual = jest.requireActual<typeof import('./math')>('./math');
    return {
        ...actual,
        multiply: jest.fn((a: number, b: number) => 42), // force a constant
    };
});

import { rectArea } from './area';
import { multiply, sum } from './math';

describe('module mocking (local)', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    test('rectArea uses mocked multiply', () => {
        expect(rectArea(2, 10)).toBe(42);
        expect(multiply).toHaveBeenCalledWith(2, 10);
        // sum remains real (not mocked)
        expect(sum(2, 3)).toBe(5);
    });
});

describe('Checking for undefined', () => {

    test('Refer to variable fpr undefined', () => {

        expect('a').not.toBeNaN();

    });

});