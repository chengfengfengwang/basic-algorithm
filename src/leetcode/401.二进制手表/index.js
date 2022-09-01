// var readBinaryWatch = function (turnedOn) {
//   const ans = [];
//   for (let h = 0; h < 12; ++h) {
//     for (let m = 0; m < 60; ++m) {
//       console.log(`${h}:${m}`);
//       console.log([h.toString(2), m.toString(2)]);
//       // if (
//       //   h.toString(2).split("0").join("").length +
//       //     m.toString(2).split("0").join("").length ===
//       //   turnedOn
//       // ) {
//       //   ans.push(h + ":" + (m < 10 ? "0" : "") + m);
//       // }
//     }
//   }
//   return ans;
// };

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
console.log(readBinaryWatch(1));
