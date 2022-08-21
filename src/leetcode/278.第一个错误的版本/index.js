/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */



/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) {
      return 1
    }
    let left = 1, right = n;
    let mid = (1 + n) / 2;
    while(left <= right) {
      mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid-1)) {return mid}
        right = mid - 1;
      } else {
        left = mid + 1
      }
    }
    return mid
  };
};
function isBadVersion(num) {
  return num >= 9
}
console.log(solution(isBadVersion)(125));
//n = 5, bad = 4

// bad 2
// [1,2,3,4,5]
