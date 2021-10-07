/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0
    const toVisitStack = [this.root]
    if (toVisitStack[0] === null) return sum
    while (toVisitStack.length) {
      const curr = toVisitStack.pop()
      sum += curr.val
      for (let child of curr.children) {
        toVisitStack.push(child)
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0
    const toVisitStack = [this.root]
    if (toVisitStack[0] === null) return count
    while (toVisitStack.length) {
      const curr = toVisitStack.pop()
      if (curr.val % 2 === 0) count++
      for (let child of curr.children) {
        toVisitStack.push(child)
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0
    const toVisitStack = [this.root]
    if (toVisitStack[0] === null) return count
    while (toVisitStack.length) {
      const curr = toVisitStack.pop()
      if (curr.val > lowerBound) count++
      for (let child of curr.children) {
        toVisitStack.push(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
