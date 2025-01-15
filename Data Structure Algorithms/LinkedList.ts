// ListNode Class
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList Class
class LinkedList<T> {
    private head: ListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node at the end of the linked list
    add(value: T): void {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // Insert a node at a specific index
    insertAt(value: T, index: number): void {
        if (index < 0 || index > this.size) {
            console.error("Index out of bounds");
            return;
        }

        const newNode = new ListNode(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous: ListNode<T> | null = null;
            let count = 0;

            while (count < index) {
                previous = current!;
                current = current!.next;
                count++;
            }

            newNode.next = current;
            previous!.next = newNode;
        }

        this.size++;
    }

    // Remove a node by value
    remove(value: T): void {
        if (!this.head) {
            console.error("List is empty");
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current: ListNode<T> | null = this.head;
        let previous: ListNode<T> | null = null;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            console.error("Value not found in the list");
            return;
        }

        previous!.next = current.next;
        this.size--;
    }

    // Get the index of a value
    indexOf(value: T): number {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1; // Value not found
    }

    // Print the linked list
    print(): void {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current : ListNode<T> | null = this.head;
        const values: T[] = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(" -> "));
    }

    // Get the size of the linked list
    getSize(): number {
        return this.size;
    }

    // Check if the list is empty
    isEmpty(): boolean {
        return this.size === 0;
    }
}

// Example Usage
const list = new LinkedList<number>();
console.log("object0",list)
list.add(10);
console.log("object1",list)
list.add(20);
console.log("object2",list)
list.add(30);
list.print(); // Output: 10 -> 20 -> 30
list.insertAt(15, 1);
list.print(); // Output: 10 -> 15 -> 20 -> 30
list.remove(20);
list.print(); // Output: 10 -> 15 -> 30
console.log("Index of 15:", list.indexOf(15)); // Output: Index of 15: 1
console.log("Size:", list.getSize()); // Output: Size: 3
console.log("Is empty:", list.isEmpty()); // Output: Is empty: false