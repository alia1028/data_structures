class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(headValue) {
    if (headValue === undefined) {
      console.log("Must provide value for first node");
    }
    this.head = new Node(headValue);
  }

  forEach(callback) {
    let node = this.head;
    while (node) {
      callback(node.value);
      node = node.next;
    }
  }

  print() {
    let result = [];
    this.forEach((val) => result.push(val));
    return result.join(", ");
  }

  insertAfter(node, value) {
    let newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
    if (this.tail === node) this.tail = newNode;
    return newNode;
  }

  removeAfter(node) {
    let removed = node.next;
    node.next = removed.next;
    return removed;
  }

  insertHead(value) {
    let currentHead = this.head;
    let newNode = new Node(value);
    newNode.next = currentHead;
    this.head = newNode;
    return newNode;
  }

  removeHead() {
    let head = this.head;
    this.head = this.head.next;
    head.next = null;
    return this.head;
  }

  findNode(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
  }

  appendToTail(value) {
    let tail = this.tail;
    let newNode = new Node(value);
    tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }
}
