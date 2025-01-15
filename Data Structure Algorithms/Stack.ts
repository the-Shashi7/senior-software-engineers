class Stack<T> {
    private items: T[] = [];
  
    // Push an item onto the stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop an item off the stack
    pop(): T | undefined {
      if (this.isEmpty()) {
        console.error("Stack is empty. Cannot pop.");
        return undefined;
      }
      return this.items.pop();
    }
  
    // Peek the top item of the stack
    peek(): T | undefined {
      if (this.isEmpty()) {
        console.error("Stack is empty. Cannot peek.");
        return undefined;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size(): number {
      return this.items.length;
    }
  
    // Clear the stack
    clear(): void {
      this.items = [];
    }
  }
  
  // Example usage:
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log(numberStack.peek()); // Output: 20
  console.log(numberStack.pop());  // Output: 20
  console.log(numberStack.size()); // Output: 1
  console.log(numberStack.isEmpty()); // Output: false
  numberStack.clear();
  console.log(numberStack.isEmpty()); // Output: true  