var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  // extend treeMethods into newTree objects
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// input: takes in a value to be set as the value of a new node
// output: updated tree with the new node within it
// constraint: n/a?
// edge cases: same process for adding into any tree or subtree
treeMethods.addChild = function(value) {
  // create a new node (a subtree) with target value
  var node = Tree(value);
  // add the node as a child of the tree
  this.children.push(node);
};

// input: takes in any target value
// output: boolean whether or not it is found within the tree
// constraint: n/a?
// edge cases: should return false if nothing is in the tree
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



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild should run in O(h) time relative to the height of the tree and the contains method should run in linear O(n) time
 */
