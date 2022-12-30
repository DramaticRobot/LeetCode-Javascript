const startTime = performance.now();

nums = [4, 1, -1, 2, -1, 2, 3], k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Get the frequencies of the nums and put them into a key-value map
    const frequencies = new Map();
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        if (frequencies.has(nums[i])) {
            let count_i = frequencies.get(nums[i]) + 1;
            frequencies.set(nums[i], count_i);
        }
        else
            frequencies.set(nums[i], 1);
        if (i != j) {
            if (frequencies.has(nums[j])) {
                let count_j = frequencies.get(nums[j]) + 1;
                frequencies.set(nums[j], count_j);
            }
            else
                frequencies.set(nums[j], 1);
        }
        i++;
        j--;
    }

    // Sort the map by frequency
    let sorted = Array.from(frequencies).sort((a, b) => b[1] - a[1]);

    // Choose the top 'k' frequencies
    const ans = [];
    for (let i = 0; i < k; i++)
        ans.push(sorted[i][0]);
    
    return ans;
};

let ans = topKFrequent(nums, k);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');