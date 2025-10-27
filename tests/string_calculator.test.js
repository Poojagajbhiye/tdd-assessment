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

    test('should return the sum for two numbers in the string', () => {
        const inputString = '1,2';
        const result = add(inputString);
        expect(result).toBe(3);
    });

    test('should return the sum for 5 numbers in the string', () => {
        const inputString = '1,2,3,4,5';
        const result = add(inputString);
        expect(result).toBe(15);
    });

    test('should return the sum for 10 numbers in the string', () => {
        const inputString = '1,12,2,0,5,3,66,3,9,4';
        const result = add(inputString);
        expect(result).toBe(105);
    });

    test('should return the sum for 20 numbers in the string', () => {
        const inputString = '1,12,2,0,5,3,66,3,9,4,7,18,8,6,6,4,11,77,4,2';
        const result = add(inputString);
        expect(result).toBe(248);
    });

    test('should handle new lines between numbers (instead of commas)', () => {
        const inputString = '1\n12,2,0\n7,1';
        const result = add(inputString);
        expect(result).toBe(23);
    });
});