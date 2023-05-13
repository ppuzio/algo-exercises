class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }
  unshift(val) {
    let newHead = new Node(val);
    const prevHead = this.head;
    this.head = newHead;
    if (!prevHead) {
      this.tail = newHead;
    } else {
      this.head.next = prevHead;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let result = this.head;
    while (index > 0) {
      result = result.next;
      index--;
    }

    return result;
  }
  set(index, newValue) {
    if (index < 0 || index >= this.length) {
      throw new Error("incorrect index");
    }

    const currentVal = list.get(index);
    currentVal.val = newValue;
  }
  insert(index, newValue) {
    if (index < 0 || index > this.length) {
      throw new Error("not found");
    }
    if (index === 0) {
      return this.unshift(newValue);
    }
    if (index === this.length) {
      return this.push(newValue);
    }
    const newValueNode = new Node(newValue);
    const prevValue = this.get(index - 1);
    newValueNode.next = prevValue.next;
    prevValue.next = newValueNode;
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("not found");
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prevVal = this.get(index - 1);
    prevVal.next = prevVal.next.next;
    this.length--;
    return;
  }
  reverse() {
    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    // 1 2 3 4
    let counter = 0;
    let currentEl = this.tail; // 1
    let currentElNext = currentEl.next; // 2
    this.tail.next = null;
    while (counter <= this.length) {
      const usualNext = currentElNext; // 2 -> 3,
      if (!usualNext) return;
      currentElNext = currentElNext.next; // 3 -> 4
      usualNext.next = currentEl; // 2 do 1, 3 do 2,
      currentEl = usualNext; // 2
      counter++;
    }
    return;
    // alternatively
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
