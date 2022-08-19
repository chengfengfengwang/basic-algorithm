## 选择排序
每次从数组中找出当前最小值，从原数组中移除并且放到一个新数组中，直到原数组为空
```
const sortArray = function (nums) {
  const newArr = [];
  function findMinIndex(arr) {
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }
    return minIndex
  }
  while(nums.length) {
    newArr.push(...nums.splice(findMinIndex(nums), 1))
  }
  return newArr
}
```

## 冒泡排序
数组相邻项两两比较，如果左侧比右侧大，就交换这两项的值；这样一轮下来，数组中最大值就会被排到最末尾;
经过[数组.length]轮，数组可以排序好