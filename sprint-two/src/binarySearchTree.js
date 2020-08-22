// implement in pseduoclassical style
var BinarySearchTree = function(value) {
  // root: the very first value at the top of the BST
  this.value = value;
  // left property: a BST where all are values lower than current value
  this.left = null;
  // right property: a BST where all values higher than current value
  this.right = null;
};

// I: accepts any value
// O: returns updated tree with the new node in the correct position
// C: runs in O(log(n)), can cut input in half to find correct position by choosing left/right sides of tree
// E: if there are duplicates, ignore
BinarySearchTree.prototype.insert = function(value) {
  // avoid duplicate values
  if (!this.contains(value)) {
    // create the new BST tree node
    var newTreeNode = new BinarySearchTree(value);
    // if the current tree's val is > new tree's val, update curr tree's left property
    if (this.value > newTreeNode.value) {
      // if the curr tree's left val is null, just insert new node as the child tree
      if (this.left === null) {
        this.left = newTreeNode;
      } else { // else if curr tree has left children, recurse and compare values against the children
        this.left.insert(value);
      }
    } else { // if the current tree's val is < new tree's val, update curr tree's right property
      // if curr tree's right val is null, insert new node as child tree
      if (this.right === null) {
        this.right = newTreeNode;
      } else { // else if curr tree has right children, recurse and compare values against the children
        this.right.insert(value);
      }
    }
  }
};

// I: accepts any value
// O: a boolean whether or not the value is contained in the tree
// C: should run in O(log(n)) time to find the value, always cutting the data in half
// E:
BinarySearchTree.prototype.contains = function(value) {
  // traverse through the BST starting from the root to find if the value exists
  // if the input = curr val then it exists
  if (this.value === value) {
    return true;
  } else if (this.value < value) {
    // if there are no more right children then it doesn't exist in the tree
    if (this.right === null) {
      return false;
    }
    // if there are, recurse on the right half of the tree
    return this.right.contains(value);
  } else {
    // if there are no more left children it doesn't exist in the tree
    if (this.left === null) {
      return false;
    }
    // recurse on the left half
    return this.left.contains(value);
  }
};

// I: accepts a callback fcn
// O: updated tree after calling the input on every value using DFS
// C: it should run in O(n) time because we have to go through every treeNode
// E:
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // traverse every node in the tree by going through all children before neighboring nodes
  // execute the callback fcn on the current node
  cb(this.value);
  // if there are left children, recurse on the left until theres no more
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) { // if there are right children, recurse on the right until theres no more
    this.right.depthFirstLog(cb);
  }
};

// I: accepts a callback fcn
// O: updated tree after calling the input on every value using BFS
// C: it should run in O(n) time because we have to go through every treeNode
// E:
BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // traverse every node in the tree depth wise before going deeper
  // use a queue to ensure FIFO order
  var queue = [];
  // start from root
  var temp = this;
  queue.push(temp);
  while (queue.length > 0) {
    // enqueue left child, then right to the queue
    if (temp.left !== null) {
      queue.push(temp.left);
    }
    if (temp.right !== null) {
      queue.push(temp.right);
    }
    // dequeue and callback on the first item
    cb(queue.shift().value);
    // update temp to next item in queue
    temp = queue[0];
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 * Wrote my thoughts in the C section of IOCE
 */
