class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  printList() {
    let currNode = this.head;
    let list = [];
    for (let i = 0; i < this.length; i++) {
      list.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(list);
  }
  insert(index, value) {
    if (this.length <= index) {
      this.append(value);
    } else if (index == 0) {
      this.prepend(value);
    } else {
      const requiredNode = this.traverseToIndex(index);
      const newNode = new Node(value);
      const nextNode = requiredNode.next;

      newNode.next = nextNode;
      newNode.prev = requiredNode;
      requiredNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
    }
  }
  removeFirst() {
    const firstNode = this.head;
    this.head = firstNode.next;
    this.head.prev = null;

    firstNode.next = null;

    this.length--;
  }
  removeLast() {
    const lastNode = this.tail;
    this.tail = lastNode.prev;
    this.tail.next = null;
    lastNode.prev = null;
    this.length--;
  }
  delete(index) {
    if (index == 0) {
      this.removeFirst();
    } else if (index >= this.length) {
      this.removeLast();
    } else {
      const requiredNode = this.traverseToIndex(index);
      const unwantedNode = requiredNode.next;
      requiredNode.next = unwantedNode.next;
      requiredNode.prev = unwantedNode.prev;
      unwantedNode.next = null;
      unwantedNode.prev = null;
      this.length--;
    }
  }
  traverseLTR(index) {
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }
  traverseRTL(index) {
    let currNode = this.tail;
    for (let i = 0; i < index; i++) {
      currNode = currNode.prev;
    }
    console.log("value=", currNode.value);
    return currNode;
  }
  traverseToIndex(index) {
    const mid = Math.floor(this.length / 2);
    console.log("m=", mid, index);
    if (index <= mid) {
      return this.traverseLTR(index - 1);
    } else {
      return this.traverseRTL(this.length - index);
    }
  }
}
const myList = new DoublyLinkedList(10);
// myList.printList();
myList.append(2);
myList.append(20);
myList.append(30);
myList.append(40);
// console.log(myList);
myList.printList();
myList.insert(2, 56);
myList.printList();
console.log(myList.length);
myList.insert(4, 50);
myList.printList();
// console.log(myList.length);
// myList.delete(3);
// myList.printList();
// console.log(myList.length);
