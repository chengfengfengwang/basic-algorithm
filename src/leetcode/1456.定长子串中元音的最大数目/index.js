/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 非滑动窗口解决方案
// var maxVowels = function (s, k) {
//   let max = 0;
//   for (let i = 0; i < (s.length - k + 1); i++) {
//     const curCount = findCount(s.substring(i, i + k));
//     if (curCount > max) {
//       max = curCount;
//     }
//   }
//   return max;
// };
// function findCount(str) {
//   const arr = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (arr.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

var maxVowels = function (s, k) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  let start = 0,
    end = start + k;
  let section = s.substring(start, end);
  let count = 0;
  for (i = 0; i < section.length; i++) {
    if (vowelArr.includes(section[i])) {
      count++;
    }
  }
  let max = count;
  end--
  while (end < s.length-1) {
    start++;
    end++
    console.log(s[end]);
    if (vowelArr.includes(s[end])) {
      count++
    }
    if (vowelArr.includes(s[start-1])) {
      count--
    }
    if (count > max) {
      max = count
    }
  }
  return max;
};




// console.log(maxVowels("abciiidef", 3));
// console.log(maxVowels("leetcode", 3));
// console.log(maxVowels("rhythms", 4));
// console.log(maxVowels("weallloveyou", 7));

// 输入：s = "abciiidef", k = 3  3
// 输入：s = "leetcode", k = 3  2
// 输入：s = "rhythms", k = 4  0
