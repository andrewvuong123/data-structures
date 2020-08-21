

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// I: takes in a key and a value
// O: should update hashtable to have the inputted key/value pair
// C: insertion would run in O(1) time, keys are hashed so there is constant access
// E: should overwrite a value if they have the same keys
HashTable.prototype.insert = function(k, v) {
  // use hashing fcn to translate key into an index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // insert the index:value pair into the hashtable's limited array storage
  this._storage.set(index, v);
};

// I: takes in any key
// O: returns the value at that given input key
// C: should run in O(1) time, have constant time lookup to key indices in memory
// E: should return undefined if the key doesn't exist
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if the key exists, return the value in storage
  return this._storage.get(index);
};

// I: takes in any key
// O: updates hash storage with the input key and it's value pair removed
// C: should run in O(1) time, constant lookup to keys
// E: only remove if key exists in storage
HashTable.prototype.remove = function(k) {
  // index var is stored in a "closure scope", will remain available to the function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a callback function to splice the input key from storage
  var callRemove = function(value, key, storage) {
    // if the index matches the key passed in, splice it from the array
    if (key === index) {
      storage.splice(key);
    }
  };
  // use LimitedArray's helperfcn each to use the callback fcn on each item in the storage array
  this._storage.each(callRemove);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * The complexity for these would run in linear time at worst case due to if too many items are hashed into the same key or if the table needs to be rehashed (make more space). But because we have the LimitedArray class I think that these functions will run in O(1) time.
 */


