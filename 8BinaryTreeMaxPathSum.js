// Binary Tree Max Path Sum

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

  return root;
}
/////////////// ข้างบนทำแบบเดิมเหมือนข้อ4เพื่อสร้่าง treeของbinary

/////สร้างแบบทำสำหรับobj
class Result {
  constructor() {
    this.maxSum = Number.MIN_SAFE_INTEGER;
  }
}

function maxPathSum(root) {
  const result = new Result();
  findMaxPathSum(root, result);
  return result.maxSum;
}

function findMaxPathSum(node, result) {
  if (node === null) {
    return 0;
  }

  ///////Cal max path sum at left and right กิ้ง
  const leftMax = Math.max(findMaxPathSum(node.left, result), 0);
  const rightMax = Math.max(findMaxPathSum(node.right, result), 0);

  // อับเดทข้อมูลรวมทั้งหมด
  const currentMaxPath = node.value + leftMax + rightMax;
  result.maxSum = Math.max(result.maxSum, currentMaxPath);

  //ส่งค่าทำตอบ
  return node.value + Math.max(leftMax, rightMax);
}

const inputArray = [9, 10, 15, 12, 6, 23, 24];
const root = BuildTreeFromArray(inputArray);

const result = maxPathSum(root);
console.log(result);
