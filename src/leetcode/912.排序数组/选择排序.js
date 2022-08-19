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

nums = [5,2,3,1]
// nums = [5,1,1,2,0,0];
console.log(sortArray(nums));
// console.log(nums);
