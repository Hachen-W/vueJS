function checkBrackets(input) {
    const stack = [];

    for (let char of input) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return "Неправильная";
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? "Правильная" : "Неправильная";
}

const userInput = prompt("Введите строку, состоящую из скобок:");
const result = checkBrackets(userInput);
alert(result);
