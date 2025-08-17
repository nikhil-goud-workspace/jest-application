// math.test.ts
import { add, getObject, isPositive, multiply, approxPi } from './math';
import { greet } from './strings';
import { getFruits } from './arrays';
import { failIfNegative } from './errors';
import { fetchUser, fetchWithError } from './async';
import { before } from 'node:test';

describe('math test suite', () => {
    test('add: primitive equality', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(2, 3)).not.toBe(6);
    });

    // test.only('getObject: deep equality', () => {
    //     expect(getObject()).toEqual({ a: 1, b: 2 });
    // });

    // test.skip('getObject: deep equality', () => {
    //     expect(getObject()).toEqual({ a: 1, b: 2 });
    // });

    test('isPositive: truthiness', () => {
        expect(isPositive(5)).toBeTruthy();
        expect(isPositive(-3)).toBeFalsy();
        expect(null).toBeNull();
        expect(undefined).toBeUndefined();
    });

    test('multiply & approxPi: numeric matchers', () => {
        expect(multiply(2, 5)).toBeGreaterThan(9);
        expect(multiply(2, 5)).toBeLessThanOrEqual(10);
        expect(approxPi()).toBeCloseTo(3.14, 2);
    });
});

describe('strings test suite', () => {
    test('greet: contains name', () => {
        expect(greet('World')).toMatch(/World/);

        expect("Hello, WORLD!").toMatch(/world/i); // case-insensitive

        expect("Hello, World!").toContain("World"); // case-sensitive

        expect("Hello, World!").toMatch(/^Hello/); // Starts-with check

        expect("Hello, World!").toMatch(/World!$/); // Ends-with check

        expect("Hello, Bob!").toMatch(/World|Bob/); // Match any of several words

        expect("Hello, World!").toMatch(/,\s*World/); // Match zero or more whitespace character

        expect("Hello, World!").toMatch(/,\s+World/); // Match one or more whitespace character

        expect("Hello").toMatch(/^[a-zA-Z0-9]+$/); // ✅ Pass

        expect("Hello World").toMatch(/^[a-zA-Z\s]+$/); // ✅ Pass


        expect(greet('Bob')).toContain('Bo');
    });
});

describe('getFruits Mango test suite', () => {

    let fruits: string[];
    beforeEach(() => {
        fruits = getFruits();
        fruits.push('Mango')
    });

    test('getFruits: Checkijng for Mango item', () => {
        expect(fruits).toContain('Mango');
    });

    afterEach(() => {
        fruits = [];
    })
});

describe('errors test suite', () => {
    test('failIfNegative throws', () => {
        expect(() => failIfNegative(-200)).toThrow();
        expect(() => failIfNegative(-1)).toThrow('Negative number!');
    });
});

describe('async test suite', () => {
    test('fetchUser resolves', async () => {
        await expect(fetchUser()).resolves.toEqual({ id: 1, name: 'Ava' });
    });

    test('fetchWithError rejects', async () => {
        await expect(fetchWithError()).rejects.toThrow('Network fail');
    });
});

describe('objects & instances test suite', () => {
    class Animal { }
    class Dog extends Animal { }

    test('instance, length, property', () => {
        expect(new Dog()).toBeInstanceOf(Animal);
        expect([1, 2, 3]).toHaveLength(3);
        expect({ name: 'Ava', age: 25 }).toHaveProperty('name', 'Ava');
    });
});

// todo testcase
it.todo('should handle large numbers');