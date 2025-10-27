const DataType = Object.freeze({
    STRING: 'string'
});

function add(numbers) {
    if (typeof numbers === DataType.STRING) {
        if (numbers.trim() === '') return 0;
        const normalized = numbers.replace(/\n/g, ',');
        const convertedNumberArray = normalized.split(',').map(num => Number(num.trim()));
        return convertedNumberArray.reduce((acc, num) => acc + num, 0);
    }
}

module.exports = { add };