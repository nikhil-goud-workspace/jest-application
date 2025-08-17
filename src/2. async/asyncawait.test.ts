import { fetchDataPromise, fetchErrorPromise } from './promises';

describe('async/await', () => {
    beforeEach(() => {
        // reset per-test state
        jest.restoreAllMocks();
    });

    test('awaits success', async () => {
        expect.assertions(1);
        await expect(fetchDataPromise()).resolves.toBe('peanut butter');
    });

    test('awaits rejection (try/catch)', async () => {
        expect.assertions(1);
        // try {
        //     await fetchErrorPromise();
        // } catch (e) {
        //     expect(e).toEqual(new Error('fail'));
        // }
        await expect(fetchErrorPromise()).rejects.toThrow('Fail');
    });
});