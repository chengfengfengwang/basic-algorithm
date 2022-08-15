const nums = createArr(100),
  target = 6;
// var searchInsert = function (nums, target) {
//   let slowIndex = 0,
//     fastIndex = 1;
//   if (target <= nums[0]) {
//     return 0
//   }
//   while (fastIndex < nums.length) {
//     if (target === nums[fastIndex]) {
//       return fastIndex;
//     } else if (nums[fastIndex] > target) {
//       return slowIndex + 1;
//     } else {
//       slowIndex++;
//       fastIndex++;
//     }
//   }
//   return fastIndex;
// };
// console.log(searchInsert(nums, target));


// var midSearch = function (nums, target) {
//   let min = 0,
//     max = nums.length - 1, mid = Math.floor((min + max) / 2);
//   while(min <= max) {
//     let current = nums[mid];
//     if (current === target) {
//       return mid
//     } else if (nums[mid] < target) {
//       min = mid;
//     } else {
//       max = mid
//     }
//     mid = Math.floor((min + max) / 2)
//   }
//   return mid
// };
// console.log(midSearch(nums, 6));


// var insertSearch = function (nums, target) {
//   let min = 0,
//     max = nums.length - 1, mid = Math.floor((min + max) / 2);
//   while(min <= max) {
//     let current = nums[mid];
//     if (current === target) {
//       return mid
//     } else if (current < target) {
//       min = mid + 1;
//     } else {
//       max = mid - 1
//     }
//     mid = Math.floor((min + max) / 2)
//   }
//   return min
// };
// console.log(insertSearch([1, 5, 6, 7, 8], 3));


function createArr(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i)
  }
  return arr
}