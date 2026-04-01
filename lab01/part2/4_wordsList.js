function convertCommaToDot(input) {
    let result = '';
    let word = '';
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            if (word.trim() !== '') {
                result += word + '.';
                word = '';
            }
        } else {
            word += input[i];
        }
    }

    if (word.trim() !== '') {
        result += word;
    }

    if (result.endsWith('.')) {
        result = result.slice(0, -1);
    }
    
    return result;
}

function process() {
    const userInput = prompt("Введите список слов, разделенных запятыми:");
    const result = convertCommaToDot(userInput);
    alert(`Список слов, разделенных точками: ${result}`);
}

process()
