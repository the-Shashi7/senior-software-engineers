// Define a BinaryTreeNode class
class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | null = null;
    right: BinaryTreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

// Define a BinaryTree class
class BinaryTree<T> {
    root: BinaryTreeNode<T> | null = null;

    constructor(value?: T) {
        if (value !== undefined) {
            this.root = new BinaryTreeNode(value);
        }
    }

    // Insert a value into the binary tree (Binary Search Tree property)
    insert(value: T): void {
        const newNode = new BinaryTreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current) {
            if (value < current.value) {
                // Go to the left subtree
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                // Go to the right subtree
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    // Traverse the tree in-order (Left, Root, Right)
    inOrderTraversal(node: BinaryTreeNode<T> | null = this.root, callback: (value: T) => void): void {
        if (node) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    // Traverse the tree pre-order (Root, Left, Right)
    preOrderTraversal(node: BinaryTreeNode<T> | null = this.root, callback: (value: T) => void): void {
        if (node) {
            callback(node.value);
            this.preOrderTraversal(node.left, callback);
            this.preOrderTraversal(node.right, callback);
        }
    }

    // Traverse the tree post-order (Left, Right, Root)
    postOrderTraversal(node: BinaryTreeNode<T> | null = this.root, callback: (value: T) => void): void {
        if (node) {
            this.postOrderTraversal(node.left, callback);
            this.postOrderTraversal(node.right, callback);
            callback(node.value);
        }
    }

    // Search for a value in the binary tree
    search(value: T): boolean {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
    // Breadth-First Search (BFS) - Iterative
    bfs(): T[] {
        if (!this.root) return [];
        const queue: BinaryTreeNode<T>[] = [this.root];
        const result: T[] = [];

        while (queue.length > 0) {
            const node = queue.shift()!;
            result.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }

    // Depth-First Search (DFS) - Iterative
    dfsIterative(): T[] {
        if (!this.root) return [];
        const stack: BinaryTreeNode<T>[] = [this.root];
        const result: T[] = [];

        while (stack.length > 0) {
            const node = stack.pop()!;
            result.push(node.value);

            // Add right child first, so left child is processed first
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return result;
    }

    // Calculate the height of the tree (or a subtree)
    calculateHeight(node: BinaryTreeNode<T> | null = this.root): number {
        if (!node) return -1; // Return -1 for null nodes (height of an empty tree is -1)
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Calculate the depth of a specific node
    calculateDepth(nodeValue: T): number {
        if (!this.root) return -1;

        let current: BinaryTreeNode<T> | null = this.root;
        let depth = 0;

        while (current) {
            if (current.value === nodeValue) {
                return depth;
            }
            depth++;
            current = nodeValue < current.value ? current.left : current.right;
        }

        return -1;
    }
}

// Example Usage:
const binaryTree = new BinaryTree<number>();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log("In-order Traversal:");
binaryTree.inOrderTraversal(binaryTree.root, (value) => console.log(value)); // Output: 3, 5, 7, 10, 15

console.log("Pre-order Traversal:");
binaryTree.preOrderTraversal(binaryTree.root, (value) => console.log(value)); // Output: 10, 5, 3, 7, 15

console.log("Post-order Traversal:");
binaryTree.postOrderTraversal(binaryTree.root, (value) => console.log(value)); // Output: 3, 7, 5, 15, 10

console.log("Search for 7:", binaryTree.search(7)); // Output: true
console.log("Search for 20:", binaryTree.search(20)); // Output: false  