function getRemainders(numbers) {
    const remainders = numbers.map(num => num % 5);

    return remainders;
}

const userInput = prompt("Введите массив натуральных чисел, разделенных запятыми:");
const numberArray = userInput.split(',').map(num => Number(num.trim()));
const result = getRemainders(numberArray);
alert(`Остатки от деления на 5: ${result.join(', ')}`);
