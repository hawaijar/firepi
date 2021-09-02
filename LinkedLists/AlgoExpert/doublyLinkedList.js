class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  setHead(node) {
    // base case
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
  }
  setTail(node) {
    // base case
    if (!this.tail) {
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  }
  insertBefore(node, nodeToInsert) {
    // base case
    if (node === this.head) {
      this.setHead(nodeToInsert);
    } else {
      nodeToInsert.next = node;
      nodeToInsert.previous = node.previous;
      node.previous.next = nodeToInsert;
      node.previous = nodeToInsert;
    }
    this.length += this.length;
  }
  insertAfter(node, nodeToInsert) {
    // base case
    if (node === this.tail) {
      this.setTail(nodeToInsert);
    } else {
      nodeToInsert.next = node.next;
      node.next.previous = nodeToInsert;
      nodeToInsert.previous = node;
      node.next = nodeToInsert;
    }
    this.length += this.length;
  }
  insertAtPosition(position, nodeToInsert) {
    if (position === this.length - 1) {
      this.insertBefore(this.tail, nodeToInsert);
    } else if (position === 0) {
      this.insertBefore(this.head, nodeToInsert);
    } else if (position < this.length - 1) {
      let count = 0;
      let current = this.head;
      while (current) {
        count += 1;
        if (count === position) {
          break;
        }
        current = current.next;
      }
      this.insertBefore(current, nodeToInsert);
    }
  }
  remove(node) {
    // base case
    if (this.head === node) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else if (this.tail === node) {
      const previous = this.tail.previous;
      previous.next = null;
      this.tail = previous;
      this.length -= 1;
    } else {
      const previous = node.previous;
      const next = node.next;
      previous.next = next;
      next.previous = previous;
      node = null;
    }
  }
  containsNodeWithValue(value) {
    // base case
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  removeNodesWithValue(value) {
    const node = this.containsNodeWithValue(value);
    if (node) {
      this.remove(node);
    }
  }
}
