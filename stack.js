class Stack {
  constructor() {
    this.container = {};
    this.count = 0;
  }

  push(value) {
    this.container[this.count] = value;
    this.count++;
    return this;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let removedItem = this.container[this.count];
    delete this.container[this.count];
    return removedItem;
  }

  peek() {
    return this.container[this.count - 1];
  }

  count() {
    return this.count;
  }
}
