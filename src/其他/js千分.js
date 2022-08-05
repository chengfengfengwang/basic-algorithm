// const a = '12345678'.replace(/\d(?=(\d{3})+$)/g, function(match) {
//   // console.log('---', match)
//   return match + ','
// })
// console.log(a)

// 前瞻断言，x(?=¥)仅当x后面是¥时，匹配x
// 仅当3个为一组的数字结尾出现时，匹配这组数字前面的一个数字
const a = '12345678'.replace(/\d(?=(\d{3})+$)/g, function(match) {
  return match + ','
})
console.log(a)

