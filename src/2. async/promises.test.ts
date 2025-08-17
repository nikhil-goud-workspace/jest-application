import { fetchDataPromise, fetchErrorPromise } from './promises';

describe('promises', () => {
    afterEach(() => {
        // good place to clean mocks if we add any later
        jest.clearAllMocks();
    });

    test('resolves with data', () => {
        expect.assertions(1);
        return fetchDataPromise().then((data) => {
            expect(data).toBe('peanut butter');
        });
    });

    test('rejects with error', () => {
        expect.assertions(1);
        return fetchErrorPromise().catch((err) => {
            expect(err).toEqual(new Error('Fail'));
        });
    });
});
