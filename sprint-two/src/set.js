var Set = function() {
  var set = Object.create(setPrototype);
  // can implement this set by using a hash with keys as the items and values as the count
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

// I: takes any string
// O: adds the inputted string to the set
// C: will run in O(1) to add into the hash, have constant access to the keys
// E: if it already exists in the set
setPrototype.add = function(item) {
  // only add if the item does not exist in storage yet
  if (!(item in this._storage)) {
    // add the item into the storage hash and update the storage value count to 1
    this._storage[item] = 1;
  }
};

// I: takes any string
// O: boolean whether or not the input exists within the set
// C: run in O(1), have constant access to keys
// E:
setPrototype.contains = function(item) {
  return item in this._storage;
};

// I: takes any string
// O: updates set with the input removed
// C: runs in O(1), constant access to keys in hashes
// E: if input is not in set shouldn't do anything
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Put my hypotheses on runtime in C section above
 */
