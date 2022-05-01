const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  throw new NotImplementedError('Not implemented');

  const kInner = k;


  function getArray(listLinked) {
    let nodeArr = [];
    let cur = listLinked;
    while (cur.next) {
      nodeArr.push(cur.value);
      cur = cur.next
    }
    nodeArr.push(cur.value);
    return nodeArr;
  }
  const arrInner = getArray(l);


  // delete all - k elements
  function delElement(array, k) {
    const arrIn = [...array];
    return arrIn.filter((el) => {
      return el !== k;
    });
  }

  let arrTemp = delElement(arrInner, kInner);

  function toList(arr) {
    let head = null;
    let length = 0;

    function addQueue(value) {
      const node = new ListNode(value);
      if (!(length)) {
        head = node;
      }
      if (length) {
        let cur = head;
        while (cur.next) {
          cur = cur.next;
        }
        cur.next = node;
      }
      length++;
      return node;
    }

    function listResult(arrResult) {
      arrResult.forEach((el) => addQueue(el));
      return 1;
    }

    function getList() {
      let nodeLastValue = 0;
      if (!(length)) {
        return 1;
      } else {
        function recursive(link) {
          let linkCurrentInner = link;
          if (linkCurrentInner.next) {
            recursive(linkCurrentInner.next);
          }
          return linkCurrentInner;
        }
        nodeLastValue = recursive(head);
        return nodeLastValue;
      }
    }
    listResult(arr);
    return getList();
  }
  return toList(arrTemp);
}

module.exports = {
  removeKFromList
};
