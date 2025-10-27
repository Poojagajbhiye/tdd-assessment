const DataType = Object.freeze({
    STRING: 'string'
});

function getCustomDelimiters(delimiterLine) {
    const customDelimiter = delimiterLine.slice(2).trim();
    const escaped = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`[\\n,${escaped}]`);
}

function add(numbers) {
    if (typeof numbers === DataType.STRING) {
        if (numbers.trim() === '') return 0;

        let delimiterPattern = /[\n,]/;
        let numbersPart = numbers;

        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            const delimiterLine = parts.shift();
            numbersPart = parts.join("\n");
            delimiterPattern = getCustomDelimiters(delimiterLine);
        }

        const convertedNumberArray = numbersPart.split(delimiterPattern)
            .map((num) => num.trim())
            .filter((num) => num !== "");
        return convertedNumberArray.reduce((acc, num) => acc + Number(num), 0);
    }
}

module.exports = { add };