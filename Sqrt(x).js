// Problem: https://leetcode.com/explore/learn/card/binary-search/125/template-i/950/


const startTime = performance.now();

//x = 4;
//x = 8;
x = 9;

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x;
    while (left <= right) {
        if (left === right) {
            if ((left - 1 * left - 1 < x) && (right * right > x))
                return left - 1;
            else
                return right;
        }

        let mid = Math.floor(left + (right - left) / 2);
        sqrt_test = mid * mid;

        if (sqrt_test === x)
            return mid;
        else if (sqrt_test < x)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return right;
};

let ans = mySqrt(x);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');