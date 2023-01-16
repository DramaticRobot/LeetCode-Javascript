// Problem: https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1374/

/* 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */

const startTime = performance.now();

/* grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]; */
grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let queue = [];

    // Traverse grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 0) {
                count++
                searchIsland(i, j);

                function searchIsland(i, j) {
                    // Check for out of bounds and water
                    if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] != 0) {
                        // Set island (1's) to water (0's)
                        grid[i][j] = "0";

                        searchIsland(i + 1, j); // down
                        searchIsland(i, j + 1); // right
                        searchIsland(i - 1, j); // up
                        searchIsland(i, j - 1); // left
                    }
                }
            }
        }
    }
    return count;
};

let ans = numIslands(grid);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');