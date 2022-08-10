var nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5];



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