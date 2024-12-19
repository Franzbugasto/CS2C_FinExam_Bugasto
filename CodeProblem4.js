class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.print();
  }

  // Print function to display the linked list
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null"; // End of the list
    console.log(result);
  }
}

// Create a LinkedList instance
const linkedList = new LinkedList();

// Append the given items
linkedList.append("Data Structures-Array");
linkedList.append("Variable Type-Integer");
linkedList.append("Sorting Algorithm-Bubble Sort");
