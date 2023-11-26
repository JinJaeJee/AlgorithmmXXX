// Find Leaves of Binary Tree

class BinaryNodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function BuildTreeFromArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  const root = new BinaryNodeTree(arr[0]);
  const queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const currentNode = queue.shift();
    if (arr[i] !== null) {
      currentNode.left = new BinaryNodeTree(arr[i]);
      queue.push(currentNode.left);
    }
    if (i + 1 < arr.length && arr[i + 1] !== null) {
      currentNode.right = new BinaryNodeTree(arr[i + 1]);
      queue.push(currentNode.right);
    }
  }
  // console.log(root);
  return root;
}
/////////////// ข้างบนทำแบบเดิมเหมือนข้อ4เพื่อสร้่าง treeของbinary

function findLeaves(root) {
  const result = [];

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    if (result.length <= depth) {
      result.push([node.value]);
    } else {
      result[depth].push(node.value);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return result;
}

const inputArray = [9, 10, 15, 12, 6, 23, 24];

console.log(findLeaves(BuildTreeFromArray(inputArray)));
