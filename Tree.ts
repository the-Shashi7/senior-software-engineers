// Define a TreeNode class
class TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
  
    constructor(value: T) {
      this.value = value;
      this.children = [];
    }
  
    // Add a child to this node
    addChild(child: TreeNode<T>): void {
      this.children.push(child);
    }
  
    // Remove a child from this node
    removeChild(child: TreeNode<T>): void {
      this.children = this.children.filter(c => c !== child);
    }
  }
  
  // Define a Tree class
  class Tree<T> {
    root: TreeNode<T> | null;
  
    constructor(rootValue: T) {
      this.root = new TreeNode(rootValue);
    }
  
    // Traverse the tree (Depth-First Search)
    traverseDFS(node: TreeNode<T> | null = this.root, callback: (node: TreeNode<T>) => void): void {
      if (!node) return;
      callback(node);
      for (const child of node.children) {
        this.traverseDFS(child, callback);
      }
    }
  
    // Traverse the tree (Breadth-First Search)
    traverseBFS(callback: (node: TreeNode<T>) => void): void {
      if (!this.root) return;
      const queue: TreeNode<T>[] = [this.root];
      while (queue.length > 0) {
        const current = queue.shift()!;
        callback(current);
        queue.push(...current.children);
      }
    }
  }
  
  // Example Usage:
  const tree = new Tree<string>("Root");
  
  const child1 = new TreeNode("Child 1");
  const child2 = new TreeNode("Child 2");
  
  tree.root?.addChild(child1);
  tree.root?.addChild(child2);
  
  const grandchild1 = new TreeNode("Grandchild 1");
  const grandchild2 = new TreeNode("Grandchild 2");
  
  child1.addChild(grandchild1);
  child2.addChild(grandchild2);
  
  // Traverse the tree using DFS
  console.log("DFS Traversal:");
  tree.traverseDFS(tree.root, (node) => console.log(node.value));
  
  // Traverse the tree using BFS
  console.log("BFS Traversal:");
  tree.traverseBFS((node) => console.log(node.value));  