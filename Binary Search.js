// Problem: https://leetcode.com/explore/learn/card/binary-search/138/background/1038/


const startTime = performance.now();

//nums = [-1, 0, 3, 5, 9, 12], target = 9;
//nums = [-1, 0, 3, 5, 9, 12], target = 2;
//nums = [-1, 0, 1, 2, 3, 5, 9, 10, 11, 12, 13], target = 13;
nums = [-1, 0, 3, 5, 9, 12], target = 3;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var search = function(nums, target) {
    // Starting point of left and right edges
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        
        // Set new left and right indexes
        if (target < nums[mid])
            right = mid - 1;
        else
            left = mid + 1
    }
    return -1;


};

let ans = search(nums, target);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');