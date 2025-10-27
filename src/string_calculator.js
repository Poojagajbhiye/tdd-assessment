const DataType = Object.freeze({
    STRING: 'string'
});

function add(numbers) {
    if (typeof numbers === DataType.STRING) {
        if (numbers.trim() === '') return 0;
        return Number(numbers);
    }
}

module.exports = { add };