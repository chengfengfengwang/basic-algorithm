## step1，算出间隔时间差，如果时间差小于15，return 0
```
// 两个时间点在同一天时间的情况，从当天0点计算各自走了多少分钟，直接相减
if (endHour > startHour || (endHour === startHour && endMinute >= startMinute)) {
  diffTime = (endHour * 60 + endMinute) - (startHour * 60 + startMinute)
} else {
  // 不在同一天时间，开始时间点距离当天24点 + 结束时间点距离当天0点
  diffTime = ((24 - startHour - 1) * 60 + (60 - startMinute)) + (endHour * 60 + endMinute)
}
if (diffTime < 15) {
  return 0
}
```
## step2, 只有以15为整数的分钟开始、结束的才是有效时间
```
// 15 -  startMinute % 15 计算出当前时间，距离下一个15为整数的分钟的距离
if ((startMinute % 15) !== 0) {
  diffTime -= (15 -  startMinute % 15)
}
// 以15为整结束的时间点才是有效时间点，endMinute % 15计算出endMinute有多少无效结束时间
if ((endMinute % 15) !== 0) {
  diffTime -= endMinute % 15
}
```
## 完整代码
```
var numberOfRounds = function (loginTime, logoutTime) {
  let dataArr = [...loginTime.split(':'), ...logoutTime.split(':')];
  // 把字符串转换成数值
  dataArr.forEach((item, index) => dataArr[index] = Number(item));
  let [startHour, startMinute, endHour, endMinute] = dataArr;
  let diffTime = 0;
  if (endHour > startHour || (endHour === startHour && endMinute >= startMinute)) {
    diffTime = (endHour * 60 + endMinute) - (startHour * 60 + startMinute)
  } else {
    diffTime = ((24 - startHour - 1) * 60 + (60 - startMinute)) + (endHour * 60 + endMinute)
  }
  if (diffTime < 15) {
    return 0
  }

  if ((startMinute % 15) !== 0) {
    diffTime -= (15 -  startMinute % 15)
  }
  
  if ((endMinute % 15) !== 0) {
    diffTime -= endMinute % 15
  }
  
  return diffTime / 15
};
```