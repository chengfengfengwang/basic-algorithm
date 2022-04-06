// 生成0 - 12 的随机数
const createRandom = () => Math.floor(Math.random() * 13);
const createArr = (n) => {
  let arr = [], id = 0;
  for (let index = 0; index < n; index++) {
    arr.push({
      id: id++,
      score: 0
    })
  }
  return arr
}
const arr = createArr(7);
let result = [];

// 思路：
// 1. 把数据排序
// 2. 如果最大的只有一个，把这项出栈
// 3. 找出最大项（队尾），有多个就找多个，重新加上随机数，从第一步开始
// 4. 递归return规则是result数组的长度为2

function repeat(arr) {
  if (result.length === 2) {
    return
  }
  if (arr.length === 1) {
    result.push(arr.pop());
    return
  }
  arr.sort(function (item1, item2) {
    return item1.score - item2.score
  });
  console.log('---', arr)
  // 当第一名和第二名不同时
  if (arr[arr.length - 1].score !== arr[arr.length - 2].score) {
    result.push(arr.pop());
  }
  const sameArr = arr.filter(item => item.score === arr[arr.length - 1].score);
  sameArr.forEach(item => {
    item.score += createRandom()
  });
  repeat(sameArr)
}

repeat(arr);
console.log(result)