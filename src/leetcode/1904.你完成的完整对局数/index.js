/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */

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

// startTime = "12:01", finishTime = "12:44"
// startTime = "20:00", finishTime = "06:00"
// startTime = "00:00", finishTime = "23:59"
// startTime = "00:01", finishTime = "00:00"
// startTime = "00:47", finishTime = "00:57"



console.log(numberOfRounds(startTime, finishTime));
