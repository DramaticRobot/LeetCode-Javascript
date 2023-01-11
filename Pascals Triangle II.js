// Problem: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3234/

rowIndex = 5;

const startTime = performance.now();

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// Simple loops - 0.0313 Milliseconds
var getRow = function(rowIndex) {
    let rowArray = [1];
    for (let row = 0; row < rowIndex; row++) {
        let newRowArray = [1];
        for (let i = 1; i < rowArray.length; i++) {
            let left = rowArray[i - 1];
            let right = rowArray[i];
            let sum = left + right;
            newRowArray.push(sum);
        }
        newRowArray.push(1);
        rowArray = newRowArray;
    }

    return rowArray;
};

let ans = getRow(rowIndex);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');