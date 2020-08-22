var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // I: takes in any input value
  // O: updates the doublylinkedlist with the input added at the head
  // C: runs in O(1) time, direct access to head
  // E: if the list is empty
  list.addToHead = function(value) {
    // create the newNode from value
    let newNode = Node(value);
    // if the list is empty, set the head/tail to the newNode
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else { // add the node into the list
      // get the current head of the list
      let currHead = list.head;
      // point the currents head previous property to the newNode
      currHead.prev = newNode;
      // point the newNode's next property to the current head Node
      newNode.next = currHead;
      // update head to be the newNode
      list.head = newNode;
    }
  };

  // I: takes in any input value
  // O: updates the doubly with the input added at the tail
  // C: runs in O(1) time, direct access to tail
  // E: if the list is empty
  list.addToTail = function(value) {
    // create the new node from value
    let newNode = Node(value);
    // if the list is empty, set head/tail to the newNode
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else { // else add into the list
      // get the current tail of the list
      let currTail = list.tail;
      // set the current tail's next property to the newNode
      currTail.next = newNode;
      // set the newNode's previous property to the current tail
      newNode.prev = currTail;
      // update tail to be the newNode
      list.tail = newNode;
    }
  };

  // I: no input taken
  // O: updates the list with the current head removed and returns the former head
  // C: runs in O(1) time, direct access to head
  // E: if list is empty don't do anything or if list only has one node
  list.removeHead = function() {
    // keep a variable to hold the former head
    let currHead = list.head;
    // only update new head to next node if there are more than 1 nodes in the list
    if (currHead !== null && currHead.next !== null) {
      // get the current head's next node
      let newHead = currHead.next;
      // set the next node's prev prop to null
      newHead.prev = null;
      // update head to the new head
      list.head = newHead;
    }
    // return the former head's value
    return currHead.value;
  };

  // I: no input taken
  // O: updates the list with the curr tail removed and returns the former tail
  // C: runs in O(1) time, direct access to tail
  // E: if list is empty don't do anything or only has one node
  list.removeTail = function() {
    // keep a variable to hold the former tail
    let currTail = list.tail;
    if (list.head !== null && list.head.next !== null) {
      // get the previous node
      let newTail = currTail.prev;
      // update previous node's next property to null
      newTail.next = null;
      // update tail to previous node
      list.tail = newTail;
    }
    return currTail.value;
  };

  // I: takes in any input value
  // O: returns a boolean if the input exists in the list
  // C: runs in O(1) time, need to iterate through the list to find the target
  // E: if list is empty
  list.contains = function(target) {
    // traverse down the list starting at head
    let currNode = list.head;
    while (currNode !== null) {
      // if target matches, return true
      if (currNode.value === target) {
        return true;
      }
      // update curr node
      currNode = currNode.next;
    }
    // if reach the end, return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
