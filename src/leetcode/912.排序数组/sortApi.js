const nums = [5, 4, 3, 1, 2];
console.log(JSON.parse(JSON.stringify(nums)));
nums.sort(function (a, b) {
  // console.log(a, b);
  // console.log(a - b);
  return a - b;
  // return -1
});
console.log(nums);
