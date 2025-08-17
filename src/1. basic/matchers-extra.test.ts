import { add } from './math';
import { makeUser, User, callAfter } from './objects';
import { failIfNegative } from './errors';

describe('equality flavors', () => {
    test('toStrictEqual vs toEqual (class instance vs plain object)', () => {
        const u = new User(1, 'Ava');

        // toEqual ignores prototype and compares enumerable props -> passes
        expect(u).toEqual({ id: 1, name: 'Ava' });

        // toStrictEqual ALSO checks prototype -> fails if compared to plain object
        expect(u).not.toStrictEqual({ id: 1, name: 'Ava' });

        // Same prototype => passes
        expect(u).toStrictEqual(new User(1, 'Ava'));
    });


    test('toMatchObject for partial object match', () => {
        const obj = makeUser();
        expect(obj).toMatchObject({ name: 'Ava', meta: { flags: { active: true } } });
    });

    test('toContainEqual for deep array item equality', () => {
        const list = [{ a: 1 }, { b: 2 }];
        expect(list).toContainEqual({ a: 1 });
    });

    test('toHaveProperty with deep path + expected value', () => {
        const obj = makeUser();
        expect(obj).toHaveProperty('meta.roles.0', 'admin');
        expect(obj).toHaveProperty(['meta', 'flags', 'active'], true);
    });

    // {
    //     id: 1,
    //     name: 'Ava',
    //     meta: {
    //         roles: ['admin', 'editor'],
    //         flags: {
    //             active: true
    //         }
    //     }
    // };
    test('toBeDefined / toBeUndefined', () => {
        const obj: Record<string, unknown> = { a: 1, b: undefined };
        expect(obj.a).toBeDefined();
        expect(obj.b).toBeUndefined();
    });

    test('toHaveLength on string/array', () => {
        expect('Hello').toHaveLength(5);
        expect([1, 2, 3]).toHaveLength(3);
    });
});

describe('parameterized tests with test.each', () => {
    test.each([
        [1, 2, 3],
        [2, 3, 5],
        [10, -5, 5]
    ])('add(%i, %i) = %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    });
});

describe('timers: jest.useFakeTimers', () => {
    test('advancing timers triggers callbacks', () => {
        jest.useFakeTimers();
        const spy = jest.fn();

        callAfter(1000, spy);
        expect(spy).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1000);
        expect(spy).toHaveBeenCalledTimes(1);

        jest.useRealTimers();
    });
});

describe('snapshot: error text stays stable', () => {
    test('toThrowErrorMatchingSnapshot', () => {
        expect(() => failIfNegative(-1)).toThrowErrorMatchingSnapshot();
    });
});