const arr = ['a', 'b', 'c', ['d', 'e'], [['f', 'g']]];
const resultArr = [];

function returnItem(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        returnItem(arr[i])
      } else {
        resultArr.push(arr[i])
      }
    }
  } else {
    throw new Error('请传入数组')
  }
}
returnItem(arr);
console.log(resultArr)