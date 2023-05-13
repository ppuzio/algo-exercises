class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const tailPrev = this.tail.prev;
      tailPrev.next = null;
      this.tail.prev = null;
      this.tail = tailPrev;
    }
    this.length--;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
    }
    this.length--;
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
      prevHead.prev = this.head;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let result;
    if (index < this.length / 2) {
      result = this.head;
      while (index > 0) {
        result = result.next;
        index--;
      }
    } else {
      result = this.tail;
      while (index < this.length - 1) {
        result = result.prev;
        index++;
      }
    }

    return result;
  }
}

let dlList = new DoublyLinkedList();
dlList.push("1");
dlList.push("2");
dlList.push("3");
dlList.push("4");
