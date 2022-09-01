## 思路
因为数量不是很大，遍历出所有的时间，把这些时间转换成二进制，计算二进制时间里1的数量
## 代码
```
var readBinaryWatch = function (turnedOn) {
  let arr = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (count(h.toString(2)) + count(m.toString(2)) === turnedOn) {
        arr.push(`${h}:${m<10?'0'+m:m}`)
      }
      // console.log(`real time: ${h}:${m}`);
      // console.log('binary time: ', [h.toString(2), m.toString(2)]);
      // console.log('1 count', count(h.toString(2)) + count(m.toString(2)));
    }
  }
  return arr
}
function count(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count++
    }
  }
  return count
}
```