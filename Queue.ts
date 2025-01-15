class Queue<T> {
    private items: T[] = [];
  
    // Add an item to the back of the queue
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    // Remove an item from the front of the queue
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        console.error("Queue is empty. Cannot dequeue.");
        return undefined;
      }
      return this.items.shift();
    }
  
    // Peek the item at the front of the queue
    peek(): T | undefined {
      if (this.isEmpty()) {
        console.error("Queue is empty. Cannot peek.");
        return undefined;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size(): number {
      return this.items.length;
    }
  
    // Clear the queue
    clear(): void {
      this.items = [];
    }
  }
  
  // Example usage:
  const queue = new Queue<string>();
  queue.enqueue("Alice");
  queue.enqueue("Bob");
  queue.enqueue("Charlie");
  
  console.log(queue.peek());     // Output: Alice
  console.log(queue.dequeue());  // Output: Alice
  console.log(queue.size());     // Output: 2
  console.log(queue.isEmpty());  // Output: false
  queue.clear();
  console.log(queue.isEmpty());  // Output: true  