// Problem: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

arr = [];
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


// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null

// While method
var reverseList = function (head) {
    let current = head;
    let previous = null;
    let nextNode = current;

    while (nextNode != null) {  
        nextNode = current.next; 
        current.next = previous; 
        previous = current;
        if (nextNode != null)
            current = nextNode;
    }

    return current;
}

// Recursion method
/* var reverseList = function (head) {
    if (head === null || head.next === null)
        return head;
    
    let current = head;
    let previous = null;
    let nextNode = current;

    swapNodes(nextNode, previous);

    function swapNodes(nextNode, previous) {
        nextNode = current.next;
        current.next = previous;
        previous = current;
        if (nextNode != null) {
            current = nextNode;
            swapNodes(current, previous);
        }
        else
            return;
    }

    return current;
} */

let ans = reverseList(head);

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(ans); console.log(elapsedTime.toFixed(4) + ' Milliseconds');