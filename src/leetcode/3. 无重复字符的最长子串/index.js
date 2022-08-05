const str = "acdaedfg";
// const str = "pwwkew";
// const str = "au"
// const str = 'au'
function method1(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    // 以str[i]开头的字符串
    const set = new Set();
    for (let k = i; k < str.length; k++) {
      const current = str[k];
      if (set.has(current)) {
        // 退出当前for循环
        break;
      } else {
        set.add(current);
      }
    }
    // 在本轮循环结束后，当前的set就是 str[i]开头的不重复字符串
    if (set.size > max) {
      max = set.size;
    }
  }
  return max;
}

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
  // 最长字符串出现在末尾连续的情况
  if (set.size > max) {
    max = set.size;
  }
  return max;
}

var method3 = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
      if (i != 0) {
          // 左指针向右移动一格，移除一个字符
          occ.delete(s.charAt(i - 1));
      }
      while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
          // 不断地移动右指针
          occ.add(s.charAt(rk + 1));
          ++rk;
      }
      // 第 i 到 rk 个字符是一个极长的无重复字符子串
      ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

// console.log(method1(str), method2(str));
console.log(method2(str));
// console.log(method3(str));

