const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');

    return this.head;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');

    const nodeNew = new Node(data);
    let node = this.head;

    if (!(node)) {
      return this.head = nodeNew;
    }

    let cur = this.head;
    while (cur) {
      if (nodeNew.data === cur.data) {
        return;
      }
      if (nodeNew.data < cur.data) {
        if (!(cur.left)) {
          return cur.left = nodeNew;
        }
        cur = cur.left;
      } else {
        if (!(cur.right)) {
          return cur.right = nodeNew;
        }
        cur = cur.right;
      }
    }

    /* code w recursive */
    // const nodeNew = new Node(data);
    // this.head = addInner(this.head, data);
    // function addInner(node, value) {
    //   if(!(node)) {
    //     return nodeNew;
    //   }
    //   if(node.data === value) {
    //     return node;
    //   }
    //   if(node.data > value) {
    //     node.left = addInner(node.left, value);
    //   } else {
    //     node.right = addInner(node.right, value);
    //   }
    //   return node;
    // }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');

    return hasInner(this.head, data);

    function hasInner(node, value) {
      if (!(node)) {
        return false;
      }
      if (node.data === value) {
        return true;
      }

      if (node.data > value) {
        return hasInner(node.left, value);
      } else {
        return hasInner(node.right, value);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');

    return findInner(this.head, data);

    function findInner(node, value) {
      if (!(node)) {
        return null;
      }
      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        return findInner(node.left, value);
      } else {
        return findInner(node.right, value);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');

    this.head = removeInner(this.head, data);

    function removeInner(node, value) {
      if (!(node)) {
        return false;
      }

      if (node.data > value) {
        node.left = removeInner(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeInner(node.right, value);
        return node;
      } else {

        if (!(node.left) && !(node.right)) {
          return null;
        }
        if (!(node.left)) {
          node = node.right;
          return node;
        }
        if (!(node.right)) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeInner(node.right, minRight.data);

        return node;
      }

    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!(this.head)) {
      return null;
    }
    if (this.head) {
      let node = this.head;
      while (node.left) {
        node = node.left;
      }
      let minNode = node.data;
      return minNode;
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!(this.head)) {
      return null;
    }
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    let maxNode = node.data;
    return maxNode;
  }
}

module.exports = {
  BinarySearchTree
};