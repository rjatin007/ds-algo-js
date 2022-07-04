class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length += 1;
  }
  insert(index, value) {
    if (this.length <= index) {
      this.append(value);
    } else if (index == 0) {
      this.prepend(value);
    } else {
      let requiredNode = this.traverseToIndex(index - 1);
      const newNode = new Node(value);
      newNode.next = requiredNode.next;
      requiredNode.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  delete(index) {
    if (index == 0) {
      this.removeFirst();
    } else if (index >= this.length) {
      this.removeLast();
    } else {
      const requiredNode = this.traverseToIndex(index - 1);
      const nodeToBeDeleted = requiredNode.next;
      requiredNode.next = nodeToBeDeleted.next;
      nodeToBeDeleted.next = null;
      this.length--;
    }
  }
  removeFirst() {
    const firstNode = this.head;
    this.head = firstNode.next;
    firstNode.next = null;
    this.length--;
  }
  removeLast() {
    const lastNode = this.traverseToIndex(this.length);
    this.tail = lastNode;
    this.tail.next = null;
    this.length--;
  }
  traverseToIndex(index) {
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    console.log("value=", currNode.value);
    return currNode;
  }
  printList() {
    const listArray = [];
    let currNode = this.head;
    while (currNode !== null) {
      listArray.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(listArray);
  }
}
const myList = new LinkedList(10);
myList.printList();
myList.append(2);
myList.append(20);
myList.append(30);
myList.append(40);
// myList.printList();

// myList.insert(2, 56);
myList.printList();
console.log(myList.length);
myList.insert(2, 50);
myList.printList();
console.log(myList.length);
myList.delete(3);
myList.printList();
console.log(myList.length);
