import { add, risky } from './calc';

describe('jest.fn basics', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    test('mockReturnValue / mockImplementation', () => {
        const m = jest.fn<number, [number, number]>()
            .mockReturnValueOnce(10)           // first call returns 10
            .mockImplementationOnce((a, b) => a + b) // second call sums
            .mockReturnValue(0);               // remaining calls return 0

        expect(m(2, 3)).toBe(10);
        expect(m(2, 3)).toBe(5);
        expect(m(9, 9)).toBe(0);

        expect(m).toHaveBeenCalledTimes(3);
        expect(m).toHaveBeenCalledWith(2, 3);
    });

    test('mockResolvedValue / mockRejectedValue', async () => {
        const fetchUser = jest.fn<Promise<{ id: number }>, []>()
            .mockResolvedValueOnce({ id: 1 });

        await expect(fetchUser()).resolves.toEqual({ id: 1 });
    });

    test('use a mock to assert control flow on error', () => {
        const onError = jest.fn();
        try {
            risky(-1);
        } catch {
            onError('handled');
        }
        expect(onError).toHaveBeenCalledWith('handled');
    });
});
