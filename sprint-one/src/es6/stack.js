class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stacksize = 0;
  }
  push(string) {
    this.storage[this.size()] = string;
    this.stacksize += 1;
  }

  pop() {
    if (this.size() > 0) {
      this.stacksize -= 1;
      let temp = this.storage[this.size()];
      delete this.storage[this.size()];
      return temp;
    }
  }

  size() {
    return this.stacksize;
  }
}