// Problem: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3233/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function arrayToBinaryTree(array) {
    if (!array.length) return null;
  
    const root = new TreeNode(array[0]);
  
    const queue = [root];
  
    for (let i = 1; i < array.length; i += 2) {
      const current = queue.shift();
  
      if (array[i] !== null) {
        current.left = new TreeNode(array[i]);
        queue.push(current.left);
      }
  
      if (array[i + 1] !== null && i + 1 < array.length) {
        current.right = new TreeNode(array[i + 1]);
        queue.push(current.right);
      }
    }
  
    return root;
}

function breadthFirstPrint(root) {
    let ans = "";
    if (root === null)
      return;
    
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift(); // .shift() removes the first element from an array and returns that removed element
      
        if (ans != "")
            ans += ",";
        ans += current.val;

        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }

    return ans;
}
  

array = [4, 2, 7, 1, 3];
val = 5;
root = arrayToBinaryTree(array);

const startTime = performance.now();
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {
    let outputNode = null;
    
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === val)
            return current;
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }

    return outputNode;
};

let ans = searchBST(root, val);
ans = breadthFirstPrint(ans);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');