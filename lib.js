function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}
function prime(num) {
    if (num <= 1) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return true;
    }
    return false;
}
function factorial(num) {
    if (num < 0) return undefined;
    if (num > 15) return undefined;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return -1;
}
exports.avg = avg;
exports.prime = prime;
exports.factorial = factorial;

module.exports = {
    avg,
    prime,
    factorial
}
