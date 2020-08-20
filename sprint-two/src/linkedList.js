var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // takes a value and adds to the end of the linked list
    // create a temp node to hold the new Node to be added and a pointer to traverse to the end of the list
    var temp = Node(value);
    var pointer;
    // if the list is empty, then temp will be the head and tail
    if (list.head === null) {
      list.head = temp;
      list.tail = temp;
    // else traverse down the list until reaching the tail/last node and point that to temp as the new tail
    } else {
      pointer = list.head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = temp;
      list.tail = pointer.next;
    }
  };

  list.removeHead = function() {
    // removes first node from the list and returns its value

  };

  list.contains = function(target) {
    // returns boolean whether or not the target is in the linked list
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Adding to the tail and removing from the head should take constant time while contains should take linear time since these are not indexed.
 */
