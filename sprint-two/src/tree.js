var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  // add parent property
  newTree.parent = null;
  // extend treeMethods into newTree objects
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// I: takes in a value to be set as the value of a new node
// O: updated tree with the new node within it
// C: runs in O(1) time since we have access to the array indices
// E: same process for adding into any tree or subtree
treeMethods.addChild = function(value) {
  // create a new node (a subtree) with target value
  var node = Tree(value);
  // add the node as a child of the tree
  this.children.push(node);
  // update the parent node to the current node's value if it exists
  if (!(_.isUndefined(this.value))) {
    node.parent = this.value;
  }
};

// I: takes in any target value
// O: boolean whether or not it is found within the tree
// C: runs in O(n) time, has to traverse through entire tree to find target
// E: should return false if nothing is in the tree
treeMethods.contains = function(target) {
  // base case, if the node contains the target, return true
  if (this.value === target) {
    return true;
  }
  // traverse through the tree and its children
  var node = this.children;
  for (let i = 0; i < node.length; i++) {
    // if the target has been found, return true
    if (node[i].contains(target)) {
      return true;
    }
  }
  // if traverse the whole tree, then return false
  return false;
};

// I:
// O:
// C:
// E:
treeMethods.removeFromParent = function() {

};

// I: takes in a callback function
// O: updates the tree with the cb run on every value
// C: runs in O(n) time, has to traverse each tree node
// E: nothing in the tree
treeMethods.traverse = function(cb) {
  // traverse through the tree starting at the root
  var node = this.children;
  for (let i = 0; i < node.length; i++) {
    // call the cb function on each node
    node[i].value = cb(node[i]);
    // update parent with new value
    node[i].parent = this.value;
    // traverse on other children
    node[i].traverse(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild should run in O(1) constant time because we have access to the indices in the arrays without having to traverse the tree and the contains method should run in linear O(n) time
 */
