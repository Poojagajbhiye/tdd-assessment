const { add } = require('../src/string_calculator');

describe('add()', () => {
    // Handle empty string
    test('should return 0 for an empty string', () => {
        const inputString = '';
        const result = add(inputString);
        expect(result).toBe(0);
    });

    // Handle single number
    test('should return the same number for single number in the string', () => {
        const inputString = '1';
        const result = add(inputString);
        expect(result).toBe(1);
    });

    // Handle multiple numbers
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

    // Handle new lines as delimiters
    test('should handle new lines between numbers (instead of commas)', () => {
        const inputString = '1\n12,2,0\n7,1';
        const result = add(inputString);
        expect(result).toBe(23);
    });

    // Handle different delimiters
    // To change the delimiter, the beginning of the string will contain a separate line
    // that looks like this: "//[delimiter]\n[numbers…]"
    test('should support semi-colon as delimiters (instead of commas)', () => {
        const inputString = '//;\n1;2';
        const result = add(inputString);
        expect(result).toBe(3);
    });

    test('should support dollar sign as delimiters (instead of commas)', () => {
        const inputString = '//$\n1$2$3$4';
        const result = add(inputString);
        expect(result).toBe(10);
    });

    // Handle negative numbers
    test('should throw error for a single negative number', () => {
        const inputString = '1,-2,3';
        expect(() => add(inputString)).toThrow('Negatives not allowed: -2');
    });

    test('should throw error for multiple negative numbers', () => {
        const inputString = '1,-2,3\n4\n-5';
        expect(() => add(inputString)).toThrow('Negatives not allowed: -2, -5');
    });

    // Ignore numbers bigger than 1000
    test('should ignore numbers greater than 1000', () => {
        expect(add('2,1001')).toBe(2);
        expect(add('1000,1001,2')).toBe(1002);
        expect(add('2000,3000,4')).toBe(4);
    });

    // Handle any length of delimiters
    test('should handle any length of delimiters', () => {
        const inputString = '//[***]\n1***2***3';
        const result = add(inputString);
        expect(result).toBe(6);
    });

    // Handle multiple types of delimiters
    test('should handle multiple types of delimiters', () => {
        const inputString = '//[*][%]\n1*2%3';
        const result = add(inputString);
        expect(result).toBe(6);
    });
});