// Imperative Style
function imperativeDoubleEvenNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}

// Declarative Style
function declarativeDoubleEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const imperativeDoubledEvenNumbers = imperativeDoubleEvenNumbers(numbers);
console.log(imperativeDoubledEvenNumbers);

const declarativeDoubledEvenNumbers = declarativeDoubleEvenNumbers(numbers);
console.log(declarativeDoubledEvenNumbers);

const output = item => console.log(item);
numbers.forEach(output);