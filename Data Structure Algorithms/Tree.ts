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

    heightOfTree(node: TreeNode<T> | null = this.root): number {
        if (!node) return 0;
        if (node.children.length === 0) return 1;
        let maxDepth = 0;
        for (const child of node.children) {
          const depth = this.heightOfTree(child);
          if (depth > maxDepth) maxDepth = depth;
        }
        return 1 + maxDepth;
      }

      // Check if the tree is balanced
    isBalanced(node: TreeNode<T> | null = this.root): boolean {
        if (!node) return true;
        if (node.children.length === 0) return true;
        const heights: number[] = [];
        for (const child of node.children) {
          const height = this.heightOfTree(child);
          heights.push(height);
        }
        if (Math.max(...heights) - Math.min(...heights) > 1) return false;
        return true;
      }

      // Check if the tree is a binary tree
    isBinaryTree(node: TreeNode<T> | null = this.root): boolean {
        if (!node) return true;
        if (node.children.length > 2) return false;
        for (const child of node.children) {
          if (!this.isBinaryTree(child)) return false;
        }
        return true;
      }

      // Check if the tree is a binary search tree
    isBinarySearchTree(node: TreeNode<T> | null = this.root, min = -Infinity, max = Infinity): boolean {
        if (!node) return true;
        if (node.children.length === 0) return true;
        if (node.children.length === 1) {
          const childValue = Number(node.children[0].value);
          const nodeValue = Number(node.value);
          if (childValue < nodeValue) {
            return this.isBinarySearchTree(node.children[0], min, nodeValue);
          } else {
            return this.isBinarySearchTree(node.children[0], nodeValue, max);
          }
        }
        if (node.children.length === 2) {
          const leftValue = Number(node.children[0].value);
          const rightValue = Number(node.children[1].value);
          const nodeValue = Number(node.value);
          if (leftValue < nodeValue && rightValue > nodeValue) {
            return this.isBinarySearchTree(node.children[0], min, nodeValue) && 
                   this.isBinarySearchTree(node.children[1], nodeValue, max);
          }
        }
        return false;
      }

      // Find the lowest common ancestor of two nodes
    lowestCommonAncestor(node: TreeNode<T> | null = this.root, node1: TreeNode<T>, node2: TreeNode<T>): TreeNode<T> | null {
        if (!node) return null;
        if (node === node1 || node === node2) return node;
        const lcaChildren: TreeNode<T>[] = [];
        for (const child of node.children) {
          const lca = this.lowestCommonAncestor(child, node1, node2);
          if (lca) lcaChildren.push(lca);
        }
        if (lcaChildren.length === 2) return node;
        if (lcaChildren.length === 1) return lcaChildren[0];
        return null;
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