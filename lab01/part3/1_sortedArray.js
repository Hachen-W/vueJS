function sortNaturalNumbers(input) {
    const numbers = [];
    const numArray = input.split(',');

    for (let i = 0; i < numArray.length; i++) {
        const num = parseInt(numArray[i].trim(), 10);
        if (num > 0) numbers.push(num);
    }

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}

const userInput = prompt("Введите список натуральных чисел, разделенных запятыми:");
const sortedNumbers = sortNaturalNumbers(userInput);
alert(`Отсортированный список: ${sortedNumbers.join(', ')}`);