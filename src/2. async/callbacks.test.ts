import { fetchDataCallback } from './callbacks';

describe('callbacks', () => {

    expect.assertions(1);

    test('callback style async', (done) => {
        fetchDataCallback((data) => {
            expect(data).toBe('peanut butter');
            done();
        });
    });

});

// If you forget done() or call it too early, Jest will fail or mark the test complete too soon.
