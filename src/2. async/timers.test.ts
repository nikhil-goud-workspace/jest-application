import { callAfter } from './timers';

describe('fake timers', () => {
    beforeAll(() => {
        jest.useFakeTimers(); // enable once for this suite
    });

    beforeEach(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });

    test('advancing time triggers callback', () => {
        const spy = jest.fn();

        callAfter(1000, spy);
        expect(spy).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1000);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    afterAll(() => {
        jest.useRealTimers(); // always restore
    });

});
