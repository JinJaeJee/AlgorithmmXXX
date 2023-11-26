//////////////////////////////////////
// maximum depth of binary tree algorithm

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
  /////// เก็บ กิ่งของไบนารี่ tree ที่ละ2ข้างใน1ลูป ไว้ใน BinaryNodeTree
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
    // console.log(root);
  }

  return root;
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  //////วัดค่าของแต่ละแถวว่าฝั่งไหนยาวมากกว่ากันแล้วทำการบวกโนดแรกเข้าไป
  /////
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // console.log(left, right);

  return Math.max(left, right) + 1;
}

const inputArr = [9, 10, 15, 12, 6, 23, 24];
///// output ต้อง = 4
console.log(maxDepth(BuildTreeFromArray(inputArr)));
