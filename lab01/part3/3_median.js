function calculateMedian(...numbers) {
    numbers.sort((a, b) => a - b);
    
    const length = numbers.length;
    
    if (length === 0) {
        return null;
    }
    
    if (length % 2 === 1) {
        return numbers[Math.floor(length / 2)];
    } else {
        const mid1 = numbers[length / 2 - 1];
        const mid2 = numbers[length / 2];
        return (mid1 + mid2) / 2;
    }
}

const median1 = calculateMedian(3, 1, 4, 2, 5);
console.log(`Медиана (классическая передача): ${median1}`);

const numbersArray = [10, 20, 30, 40, 50];
const median2 = calculateMedian(...numbersArray);
console.log(`Медиана (распаковка массива): ${median2}`)