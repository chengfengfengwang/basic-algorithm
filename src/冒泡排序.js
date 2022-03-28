// 时间复杂度o(n*n)
// 参考链接 https://segmentfault.com/a/1190000014175918
const arr = [2, 3, 6, 1, 7, 8, 4, 5];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < (arr.length - 1 - i); k++) {
      if (arr[k] > arr[k + 1]) {
        const temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp
      }
    }
  }
}
bubbleSort(arr);
console.log(arr)