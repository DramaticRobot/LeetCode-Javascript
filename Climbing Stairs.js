// Problem: https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1662/

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/*  Example
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    
    It's an applied Fibonacci sequence
*/

// Use recursion and memoization

const startTime = performance.now();

n = 3;

/**
 * @param {number} n
 * @return {number}
 */

// constraints: 1 <= n <= 45

var climbStairs = function(n) {
    const map = new Map();

    return stairCounter(n);
    
    function stairCounter(n) {
        let count = 0;

        if (map.has(n))
            return map.get(n);
        
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        
        count = (stairCounter(n - 1) + stairCounter(n - 2));
        map.set(n, count);
        return count;
    }
};

let ans = climbStairs(n);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');