const { add } = require('../src/string_calculator');

describe('add()', () => {
    test('should return 0 for an empty string', () => {
        const inputString = '';
        const result = add(inputString);
        expect(result).toBe(0);
    });
});