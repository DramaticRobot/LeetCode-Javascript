// Problem: https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

arr = [1, 2, 3, 4];
function arrayToList(arr) {
    let start = new ListNode();
    let current = start;
    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return start.next;
}
head = arrayToList(arr);

const startTime = performance.now();
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// 1 -> 2 -> 3 -> 4 -> null
// 2 -> 1 -> 4 -> 3 -> null

var swapPairs = function(head) {
    // Check if the head is too small for swapping
    if (head === null || head.next === null)
        return head;
    
    let dummy = new ListNode();
    dummy.next = head;
    swapNodes(dummy);
    return dummy.next;
    
    function swapNodes(swapNode) {
        if (swapNode === null)
            return;
        
        let first = swapNode.next;
        let second = null;
        if (first != null)
            second = first.next;
        if (second != null) {
            let afterSecond = second.next;

            // Swap
            second.next = first;
            swapNode.next = second;
            first.next = afterSecond;
            swapNodes(first);
        }
    }
}

let ans = swapPairs(head);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');