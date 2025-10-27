const DataType = Object.freeze({
    STRING: 'string'
});

function getCustomDelimiters(delimiterLine) {
    const customDelimiter = delimiterLine.slice(2).trim();
    const escaped = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`[\\n,${escaped}]`);
}

function add(numbers) {
    if (typeof numbers !== DataType.STRING) return 0;
    if (numbers.trim() === '') return 0;

    let delimiterPattern = /[\n,]/;
    let numbersPart = numbers;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterLine = parts.shift();
        numbersPart = parts.join("\n");
        delimiterPattern = getCustomDelimiters(delimiterLine);
    }

    const numberArray = numbersPart.split(delimiterPattern)
        .map((num) => num.trim())
        .filter((num) => num !== "");

    const numericValues = numberArray.map((num) => Number(num)).filter((num) => isFinite(num));
    const negatives = numericValues.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    const validNumbers = numericValues.filter(num => num <= 1000);
    return validNumbers.reduce((acc, num) => acc + num, 0);
}

module.exports = { add };