class Queue {
  constructor() {
    this.container = {};
    this.head = 0;
    this.count = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.container[this.tail] = value;
    this.count++;
    this.tail++;
    return this;
  }

  dequeue() {
    if (this.count === 0) {
      return undefined;
    }
    let removedItem = this.container[this.head];
    delete this.container[this.head];
    this.count--;
    if (this.head < this.tail) this.head++;
    return removedItem;
  }

  peek() {
    return this.container[this.head];
  }

  count() {
    return this.count;
  }
}
