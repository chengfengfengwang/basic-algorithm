## 方法一，枚举所有可能的子字符串
挨个把字符串的每一项作为【一个不重复字符串】 的开头，
算出以它为开头的最大不重复字符串的长度，
所有项都试过后，最后将这些长度求最大值
```
const str = 'acdaedfg';
function method1(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    // 以str[i]开头的字符串
    const set = new Set();
    for (let k = i; k < str.length; k++) {
      const current = str[k];
      if (set.has(current)) {
        // 退出当前for循环
        break
      } else {
        set.add(current)
      }
    }
    // 在本轮循环结束后，当前的set就是 str[i]开头的不重复字符串
    if (set.size > max) {
      max = set.size
    }
  }
  return max
}
```
## 方法二，双指针
1. start,end分别代表左右指针，初始值都为0；
2. start指针不变，end指针向后移，直到碰到end指针当前值不满足非重复的条件；
3. 此时[start, end]区间内的为连续不重复字符串，称为窗口；记录此时字符串长度；
4. start指针向右移动一位，把窗口里最左的字符串丢弃
5. 重复2、3、4步，直到end指针越界，得到最大值
6. 最坏情况下左右指针都从头走到尾，因此时间复杂度为O(n)
```
function method2(str) {
  let max = 0,
    start = 0,
    end = 0;
  let set = new Set();
  while (end < str.length) {
    if (set.has(str[end])) {
      // 当前set是以start开头的最长连续非重复字符串
      if (set.size > max) {
        max = set.size;
      }
      set.delete(str[start]); 
      start++;
    } else {
      set.add(str[end]);
      end++
    }
  }
  // 最长字符串出现在末尾连续
  if (set.size > max) {
    max = set.size;
  }
  return max;
}
```