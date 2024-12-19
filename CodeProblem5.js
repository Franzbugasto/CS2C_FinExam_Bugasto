class GroceryStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length === 0) {
      console.log("Stack is empty.");
      return null;
    } else {
      console.log("Top of the stack:", this.stack[this.stack.length - 1]);
      return this.stack[this.stack.length - 1];
    }
  }

  push(item) {
    this.stack.push(item);
    console.log("Pushed item:", item);
    this.peek();
  }

  pop() {
    if (this.stack.length > 0) {
      const removedItem = this.stack.pop();
      console.log("Popped item:", removedItem);
      this.peek();
    } else {
      console.log("Stack is empty. No item to pop.");
    }
  }
}

const groceryStack = new GroceryStack();

let groceryItems = [];
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  groceryItems.push(item);
}

groceryItems.forEach(item => groceryStack.push(item));

groceryStack.pop();
groceryStack.pop();
