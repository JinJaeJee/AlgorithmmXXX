// Longest Common Subsequence algorithm
// const S1 = ABCBDAB;
// const S2 = BDCABA;
///// answer is ACCTAGTACTTTG

function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  // console.log(m, n);
  // console.log(str2[0]);

  /////ทำ array (m+1 X n+1) and set all elements to 0

  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  // console.log(dp);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp);

  ///// ทำbacktrack loop ย้อนกลับหาค่า
  let i = m,
    j = n;
  const lcs = []; ///เก็บค่า common subsequence

  /////////////////ไล่ค่าจากตำแหน่งที่มุมล่างขวาของarray
  ///////// โดยลูปจะต้องวิ่งขึ้นไปทางซ้ายบน หรือซ้าย หริอข้างบน 3ทิศทาง
  ////// ถ้า str1 = str2 i-1,j-1 ขยับarrayขึ้น1ตำแหน่งหรือววิ่งขึ้นบนซ้าย
  /////// ถ้า dp ช่องที่ติดกันข้างซ้ายมีค่ามากว่าด้านบนขยับตำแหน่งไปที่ด้านซ้าย
  ////// อื่นๆขึ้นข้างบน
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
    // console.log(lcs);
    /////
  }

  return lcs.join("");
}

/////TEST1///////
const S1 = "ABCBDAB";
const S2 = "BDCABA";

console.log(longestCommonSubsequence(S1, S2));
