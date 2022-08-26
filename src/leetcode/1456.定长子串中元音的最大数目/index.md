## 使用滑动窗口思维
1. 首先计算出第一个窗口（窗口长度为制定的字符串长度）包含的元音数量
```
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
```
2. 窗口向右移动，如果新进入的是元音则count++, 如果离开窗口的是元音则count--
```
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
```
3. 最终方案
```
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
```
## 列出所有可能出现的子字符串
```
var maxVowels = function (s, k) {
  let max = 0;
  for (let i = 0; i < (s.length - k + 1); i++) {
    const curCount = findCount(s.substring(i, i + k));
    if (curCount > max) {
      max = curCount;
    }
  }
  return max;
};
function findCount(str) {
  const arr = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      count++;
    }
  }
  return count;
}
```