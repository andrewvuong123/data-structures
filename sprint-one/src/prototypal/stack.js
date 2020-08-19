var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.stacksize = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  this.storage[this.stacksize] = string;
  this.stacksize += 1;
};

stackMethods.pop = function() {
  if (this.stacksize > 0) {
    this.stacksize -= 1;
    let temp = this.storage[this.stacksize];
    delete this.storage[this.stacksize];
    return temp;
  }
};

stackMethods.size = function() {
  return this.stacksize;
};

