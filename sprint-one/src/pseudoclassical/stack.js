var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stacksize = 0;
};

Stack.prototype.push = function(string) {
  this.storage[this.stacksize] = string;
  this.stacksize += 1;
};

Stack.prototype.pop = function() {
  if (this.stacksize > 0) {
    this.stacksize -= 1;
    let temp = this.storage[this.stacksize];
    delete this.storage[this.stacksize];
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.stacksize;
};


