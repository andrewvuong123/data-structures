

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// I: takes in a key and a value
// O: should update hashtable to have the inputted key/value pair, stored in a bucket (array)
// C: insertion would run in O(1) time, keys are hashed so there is constant access
// E: should overwrite a value if they have the same keys
HashTable.prototype.insert = function(k, v) {
  // use hashing fcn to translate key to what index to insert into storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // init a bucket var to hold the key:value tuples in case of collisions (same hashed indices)
  var bucket, tuple;
  // if a bucket exists, push the tuple onto that bucket
  if (this._storage.get(index) !== undefined) {
    bucket = this._storage.get(index);
    let sameKey = false;
    // iterate bucket to check if key exists
    for (let i = 0; i < bucket.length; i++) {
      // if the key exists in a tuple, overwrite the value
      tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        sameKey = true;
      }
    }
    // if input is a new key, push the new tuple into the bucket
    if (!sameKey) {
      tuple = [k, v];
      bucket.push(tuple);
    }
  } else {
    // if a bucket doesn't exist make a new one and push the tuple into the bucket
    bucket = [];
    tuple = [k, v];
    bucket.push(tuple);
  }
  // update the hash table with the pair inserted into the bucket and the bucket created/updated at the storage index
  this._storage.set(index, bucket);
};

// I: takes in any key
// O: goes into the bucket at storage's hashed key index and within the bucket returns the corresponding tuple value given by the input key
// C: should run in O(1) time, have constant time lookup to key indices in memory
// E: should return undefined if the key doesn't exist
HashTable.prototype.retrieve = function(k) {
  // use hashing fcn to translate key to an index in storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // gets the bucket from the storage at index
  var bucket = this._storage.get(index);
  // if the key doesn't exist, return undefined
  if (bucket !== undefined) {
    // iterate through the tuples inside the bucket and check if there is any matching keys
    for (let i = 0; i < bucket.length; i++) {
      // return the value if you find a match
      let tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  // if no match is found, return undefined
  return undefined;
};

// I: takes in any key
// O: updated hash with the removed input tuple from the bucket in storage
// C: should run in O(1) time, constant lookup to keys
// E: only remove if key exists in storage
HashTable.prototype.remove = function(k) {
  // index var is stored in a "closure scope", will remain available to the function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a callback function to splice the input key from the bucket
  var callRemove = function(bucket, key, storage) {
    // use the index to find the corresponding hashed key in storage
    if (key === index) {
      // go into the bucket and iterate through to find the tuple that matches the input k
      for (let i = 0; i < bucket.length; i++) {
        // splice that tuple out of the bucket once found
        let tuple = bucket[i];
        if (tuple[0] === k) {
          bucket.splice(i, 1);
        }
      }
    }
  };
  // use LimitedArray's helperfcn each to use the callback fcn on each item in the storage array
  this._storage.each(callRemove);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * The complexity for these would run in O(n) linear time at worst case if too many items are hashed into the same key or if the table needs to be rehashed (make more space). But because we have the LimitedArray class I think that these functions will run in O(1) time on average cases.
 */


