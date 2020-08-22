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
  // traverse through the tree and its children starting at the root
  var node = this.children;
  // keep track of whether or not it has been found yet
  var found = false;
  for (let i = 0; i < node.length; i++) {
    // if the target has been found or the current node is a match, return true
    if (node[i].value === target || found === true) {
      return true;
    } else if (node[i].children.length > 0) {
      // if the current tree has children, recurse through each of the children
      found = node[i].contains(target);
    }
  }
  // return false if none is found
  return found;
};

// I:
// O:
// C:
// E:
treeMethods.removeFromParent = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild should run in O(1) constant time because we have access to the indices in the arrays without having to traverse the tree and the contains method should run in linear O(n) time
 */
