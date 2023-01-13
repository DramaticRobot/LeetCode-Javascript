// Problem: https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/

// A circular queue is a linear data structure in which the operations are performed based on FIFO principle

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queueSize = k;
    this.circularQueue = [];
    this.front = -1;
    this.rear = -1;
    for (let i = 0; i < k; i++)
        this.circularQueue.push(null);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // Add value to queue after rear
    let empty = this.isEmpty();
    let full = this.isFull();
    if (empty) {
        this.front = 0;
        this.rear = 0;
        this.circularQueue[this.front] = value;
        return true;
    }
    else if (full) 
        return false;
    else {
        this.rear++;
        if (this.rear > this.queueSize - 1)
            this.rear = 0;
        if (this.circularQueue[this.rear] === null) {
            this.circularQueue[this.rear] = value;
            return true;
        }
        else
            return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    // Remove value at head
    if (this.circularQueue[this.front] != null) {
        this.circularQueue[this.front] = null;
        this.front++;
        if (this.front > this.queueSize - 1)
            this.front = 0;
        return true
    }
    else
        return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    let value  = this.circularQueue[this.front];
    if (value >= 0 && value != null)
        return value;
    else
        return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    let value  = this.circularQueue[this.rear];
    if (value >= 0 && value != null)
        return value;
    else
        return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if (this.front === -1) {
        return true;
    }
    else
        return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    let tail = this.rear + 1;
    if (tail > this.queueSize - 1)
        tail = 0;
    if (this.circularQueue[tail] != null)
        return true
    else
        return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

let myCircularQueue = new MyCircularQueue(6);
let ans = myCircularQueue.enQueue(6); 
console.log(ans);
ans = myCircularQueue.Rear();    
console.log(ans);
ans = myCircularQueue.Rear();     
console.log(ans);
ans = myCircularQueue.deQueue();  
console.log(ans);
ans = myCircularQueue.enQueue(5); 
console.log(ans);
ans = myCircularQueue.Rear();   
console.log(ans);
ans = myCircularQueue.deQueue(); 
console.log(ans);
ans = myCircularQueue.Front();   
console.log(ans);
ans = myCircularQueue.deQueue();  
console.log(ans);
ans = myCircularQueue.deQueue();  
console.log(ans);
ans = myCircularQueue.deQueue(); 
console.log(ans);