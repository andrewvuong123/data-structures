var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.front = 0;
  instance.back = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[this.back] = string;
  this.back += 1;
};

queueMethods.dequeue = function(string) {
  if (this.size() > 0) {
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return temp;
  }
};

queueMethods.size = function(string) {
  return this.back - this.front;
};

