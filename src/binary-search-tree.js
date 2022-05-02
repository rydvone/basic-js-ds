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
    this.head = addInner(this.head, data);
    // const nodeNew = new Node(data);

    function addInner(node, value) {
      if(!(node)) {
        return new Node(data);
      }

      if(node.value = value) {
        return node;
      }

      if(node.value > value) {
        node.left = addInner(node.left, value);
      } else {
        node.right = addInner(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    
    return hasInner(this.head, data);

    function hasInner(node, value) {
      if(!(node)) {
        return false;
      }
      if(node.value === value) {
        return true;
      }

      if(node.value > value) {
        return hasInner(node.left, value);
      }
      if(node.right < value) {
        return hasInner(node.right, value);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    

  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.head = removeInner(this.head, data);

    function removeInner(node, value) {
      if(!(node)) {
        return false;
      }
      
      if(node.value > value) {
        node.left = removeInner(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeInner(node.right, value);
        return node;
      } else {

        if(!(node.left) && !(node.right)) {
          return null;
        }
        if(!(node.left)) {
          node = node.right;
          return node;
        }
        if(!(node.right)) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.value = minRight.value;

        node.right = removeInner(node.right, minRight.value);

        return node;
      }

    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if(!(this.head)) {
      return null;
    }
    if(this.head) {
      let node = this.head;
      while(node.left) {
        node = node.left;
      }
      let minNode = node.value;
      return minNode;
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if(!(this.head)) {
      return null;
    }
    if(this.head) {
      let node = this.head;
      console.log('node max 1 ', node.value);
      while(node.right) {
        node = node.right;
      }
      let maxNode = node.value;
      console.log('node max 1 ', node.value);
      return maxNode;
    }

  }
}

module.exports = {
  BinarySearchTree
};