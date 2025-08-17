import { audit, work } from './audit';

describe('jest.spyOn', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('spy and keep real implementation', () => {
        const spy = jest.spyOn(audit, 'log');    // by default, calls through
        const res = work(1);
        expect(spy).toHaveBeenCalledWith('ok');
        expect(res).toBe('[LOG] ok');
    });

    test('spy and override implementation', () => {
        const spy = jest.spyOn(audit, 'log').mockImplementation(() => 'MOCK');
        const res = work(-1);
        expect(spy).toHaveBeenCalledWith('bad');
        expect(res).toBe('MOCK');                // overridden return
    });
});
