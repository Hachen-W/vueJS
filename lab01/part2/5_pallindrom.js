function isPalindrome(input) {
    const length = input.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (input[i] !== input[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function process() {
    const userInput = prompt("Введите строку:");
    if (isPalindrome(userInput)) {
        alert("Да");
    } else {
        alert("Нет");
    }
}

process()
