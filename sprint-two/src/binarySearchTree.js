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
// E: if there are duplicates, ignore?
BinarySearchTree.prototype.insert = function(value) {
  // create the new BST tree node
  var newTreeNode = BinarySearchTree(value);
  // if the current tree's val is > new tree's val, update curr tree's left property
  if (this.value > newTreeNode.value) {
    // if the curr tree's left val is null, just insert new node as the child tree
    if (this.left === null) {
      this.left = newTreeNode;
    } else {
      // else if curr tree has left children, recurse and compare values against the children
      this.left.insert(value);
    }
  } else {
    // else if the current tree's val is < new tree's val, update curr tree's right property
    if (this.right === null) {
      // if curr tree's right val is null, insert new node as child tree
      this.right = newTreeNode;
    } else {
      // else if curr tree has right children, recurse and compare values against the children
      this.right.insert(value);
    }
  }
};

// I:
// O:
// C:
// E:
BinarySearchTree.prototype.contains = function() {

};

// I:
// O:
// C:
// E:
BinarySearchTree.prototype.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
