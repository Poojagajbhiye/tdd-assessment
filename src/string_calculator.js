const DataType = Object.freeze({
    STRING: 'string'
});

function add(numbers) {
    if (typeof numbers === DataType.STRING && numbers.trim() === '') {
        return 0;
    }
}

module.exports = { add };