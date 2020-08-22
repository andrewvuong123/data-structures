

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // new prop size to help with resizing
  this._size = 0;
};

// I: takes in a key and a value
// O: should update hashtable to have the inputted key/value pair, stored in a bucket (array)
// C: insertion would run in O(1) time, keys are hashed so there is constant access
// E: should overwrite a value if they have the same keys
HashTable.prototype.insert = function(k, v) {
  // use hashing fcn to translate key to what index to insert into storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // init a bucket var to hold the key:value tuples in case of collisions (same hashed indices)
  var bucket = this._storage.get(index) || [];
  // iterate bucket to check if key exists
  for (let i = 0; i < bucket.length; i++) {
    // if the key exists in a tuple, overwrite the value
    let tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      // return so that nothing is pushed
      return;
    }
  }
  // push the tuple into the bucket if value is not in the bucket already
  tuple = [k, v];
  bucket.push(tuple);
  // update the hash table with the pair inserted into the bucket and the bucket created/updated at the storage index
  this._storage.set(index, bucket);
  // update size of the storage
  this._size += 1;
  // check if 75% of space has been filled
  if (this._size > this._limit * 0.75) {
    // if it has, resize the hashTable to double its current size
    this.resize(this._limit * 2);
  }
};

// I: takes in any key
// O: goes into the bucket at storage's hashed key index and within the bucket returns the corresponding tuple value given by the input key
// C: should run in O(1) time, have constant time lookup to key indices in memory
// E: should return undefined if the key doesn't exist
HashTable.prototype.retrieve = function(k) {
  // use hashing fcn to translate key to an index in storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // gets the bucket from the storage at index
  var bucket = this._storage.get(index) || [];
  // iterate through the tuples inside the bucket and check if there is any matching keys
  for (let i = 0; i < bucket.length; i++) {
    // return the value if you find a match
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  // if the key doesn't exist or no match, return undefined
  return undefined;
};

// I: takes in any key
// O: updated hash with the removed input tuple from the bucket in storage
// C: should run in O(1) time, constant lookup to keys
// E: only remove if key exists in storage
HashTable.prototype.remove = function(k) {
  // index var is stored in a "closure scope", will remain available to the function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the corresponding bucket
  var bucket = this._storage.get(index) || [];
  // go into the bucket and iterate through to find the tuple that matches the input k
  for (let i = 0; i < bucket.length; i++) {
    // splice that tuple out of the bucket once found
    let tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
};

// I: takes in a new limit value
// O: creates a new hashtable with increased/decreased space
// C: runs in O(n), have to insert all values into the new hash table
// E: if can't reduce space further
HashTable.prototype.resize = function(newLimit) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 * The complexity for these would run in O(n) linear time at worst case if too many items are hashed into the same key or if the table needs to be rehashed (make more space). But because we have the LimitedArray class I think that these functions will run in O(1) time on average cases.
 */


