const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    let nodeLastValue = 0;
    if(!(this.length)) {
      return 1;
    } else {
      function recursive(link) {
        let linkCurrentInner = link;
        if(linkCurrentInner.next) {
          recursive(linkCurrentInner.next);
        }
        return linkCurrentInner;
      }
      nodeLastValue = recursive(this.head);


      return nodeLastValue;
    }
    
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');

    const nodeQueue = new ListNode(value);
    
    if(this.length === 0) {
      this.head = nodeQueue;
    }
    if(this.length) {
      let linkCurrent = this.head;
      while(linkCurrent.next) {
        console.log(linkCurrent.value);
        linkCurrent = linkCurrent.next;

      }
      linkCurrent.next = nodeQueue;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');

    if(this.length === 0) {
      return 1;
    } else {
      let linkHeadTemp = this.head.next;
      const nodeFirstValue = this.head.value;
      this.head = linkHeadTemp;

      this.length--;
      return nodeFirstValue;
    }
  }
}


module.exports = {
  Queue
};
