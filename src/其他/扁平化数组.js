const arr = ['a', 'b', 'c', ['d', 'e'], [['f', 'g']]];

// 方法一
// function returnItem(arr) {
//   const resultArr = [];
//   // fn函数自己调用自己，它是的任务是把数组里的基本值推到一个容器里
//   function fn(arr) {
//     if (Array.isArray(arr)) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           fn(arr[i])
//         } else {
//           resultArr.push(arr[i])
//         }
//       }
//     } else {
//       throw new Error('请传入数组')
//     }
//   }
//   fn (arr);
//   return resultArr
// }

// 方法二
function returnItem(arr) {
  const resultArr = []
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        resultArr.push(...returnItem(arr[i])) // returnItem自己调用自己，它回返回一个一维数组
      } else {
        resultArr.push(arr[i])
      }
    }
  } else {
    throw new Error('请传入数组')
  }
  return resultArr
}
console.log(returnItem(arr))