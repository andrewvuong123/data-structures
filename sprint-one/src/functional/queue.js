var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Use variables to hold the front and back of the queue
  var back = 0;
  var front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // enqueue you add from the back (biggest num)
    storage[back] = value;
    back += 1;

  };

  someInstance.dequeue = function() {
    // dequeue you remove from the front if it exists (lowest num)
    if (back - front >= 1) {
      let temp = storage[front];
      delete storage[front];
      front += 1;
      return temp;
    }
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
