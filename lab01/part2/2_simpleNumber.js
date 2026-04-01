function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isValidNumber(number) {
    const numMonth = Number(number);
    return !isNaN(numMonth) && numMonth >= 1;
}

function generatePrimes(n) {
    const primes = [];
    let count = 0;
    let number = 2;

    while (count < n) {
        if (isPrime(number)) {
            primes.push(number);
            count++;
        }
        number++;
    }

    return primes.join(' ');
}

function process() {
    const n = prompt("Введите натуральное число n:");
    if (isValidNumber(n)) {
        const primeNumbers = generatePrimes(n);
        alert(`Первые ${n} простых чисел: ${primeNumbers}`);
    } else {
        alert("Пожалуйста, введите натуральное число.");
    }
}

process()
