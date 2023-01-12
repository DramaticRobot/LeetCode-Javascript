// Problem: https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1661/

// Fibonacci sequence, such that each number is the sum of the two preceding ones
// Use recursion and memoization hash table

const startTime = performance.now();

n = 6;

/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    // F(n) = F(n - 1) + F(n - 2)
    // F(0) = 0, F(1) = 1

    const storedN = new Map();
    return fibonacci(n);

    function fibonacci(n) {
        let result = 0;
        if (n < 2)
            return n;
        else {
            if (storedN.has(n))
                result = storedN.get(n);

            result = fibonacci(n - 1) + fibonacci(n - 2);
        }
    
        storedN.set(n, result);
        return result;
    }
};

let ans = fib(n);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');