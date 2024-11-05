const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//test for avg
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
//test for prime
test("prime(2) should be true", () => {
    expect(lib.prime(2)).toBe(true);
});
test("prime(4) should be false", () => {
    expect(lib.prime(4)).toBe(false);
});
//test for factorial
test("factorial(5) should be 120", () => {
    expect(lib.factorial(5)).toBe(120);
});
test("factorial(0) should be 1", () => {
    expect(lib.factorial(0)).toBe(1);
});