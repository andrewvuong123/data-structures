class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(string) {
    this.storage[this.back] = string;
    this.back += 1;
  }

  dequeue() {
    if (this.size() > 0) {
      let temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return temp;
    }
  }

  size() {
    return this.back - this.front;
  }

}
