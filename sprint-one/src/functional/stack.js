var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Use a variable to keep track of size
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // when pushing, increment size and create the new key/value pair
    size += 1;
    storage[size] = value;
  };

  someInstance.pop = function() {
    // when pop, decrement size unless < 0 and return the deleted item
    let temp = storage[size];
    delete storage[size];
    if (size > 0) {
      size -= 1;
    }
    return temp;
  };

  someInstance.size = function() {
    // can return the variable size
    return size;
  };

  return someInstance;
};
