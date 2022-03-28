// 数组去重
let arr = ['a', 'a', 'c', 'b', 'c', true, true, {}, {}];
    
function useSet(arr) {
  return [...new Set(arr)]
  // or return Array.from(new Set(arr));
}
function useArrIncludes(arr) {
  const resultArr = [];
  for (const item of arr) {
    if (!resultArr.includes(item)) {
      resultArr.push(item)
    }
  }
  return resultArr
}
function useObjKey(arr) {
  const obj = {};
  for (const item of arr) {
    obj[item] = 'fakeValue'
  }
  return Object.keys(obj)
}
console.log(useArrIncludes(arr))
console.log(useObjKey(arr))
console.log(useSet(arr))
