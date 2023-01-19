// Problem: https://leetcode.com/problems/two-sum/


const startTime = performance.now();

nums = [2, 7, 11, 15], target = 9;
nums = [3,3], target = 6;
//nums = [3,2,4], target = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Searching the array - Fast
    // for (let i = 0; i < nums.length; i++) {
    //     let curr = nums[i];
    //     let searchFor = target - curr;
    //     let searchIn = nums.slice(i + 1);
    //     if (searchIn.includes(searchFor)) {
    //         let j = searchIn.indexOf(searchFor) + i + 1;
    //         return [i, j];
    //     }
    // }

    // Using a map - Much faster!
    const map = [];
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] !== undefined)
            return [i, map[diff]]
        else
            map[nums[i]] = i;
    }
};

let ans = twoSum(nums, target);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');