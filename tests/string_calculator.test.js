const { add } = require('../src/string_calculator');

describe('add()', () => {
    test('should return 0 for an empty string', () => {
        const inputString = '';
        const result = add(inputString);
        expect(result).toBe(0);
    });

    test('should return the same number for single number in the string', () => {
        const inputString = '1';
        const result = add(inputString);
        expect(result).toBe(1);
    });
});