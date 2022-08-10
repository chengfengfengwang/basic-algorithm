1. 数组是有序数组；考虑使用快慢指针
2. 快指针在前，负责扫描整个数组；慢指针在后作为参考
3. 如果快指针和慢指针不相等，则表示慢指针的当前值，在整个数组中已经没有了重复项（因为是有序数组），快慢指针各正常向后检索
4. 如果想等则需要处理数组，删除该项
```
var removeDuplicates = function(nums) {
  let slowIndex = 0;
  let fastIndex = 1;
  while(fastIndex < nums.length) {
    if (nums[slowIndex] !== nums[fastIndex]) {
      slowIndex++;
      fastIndex++
    } else {
      nums.splice(fastIndex, 1)
    }
  }
  return slowIndex + 1
};
```