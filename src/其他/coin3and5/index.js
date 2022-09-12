function change(amount) {
  let coins = [];
  if (amount < 8) {
    throw new Error('输入大于8的数吧')
  }
  if (amount === 8) {
    return [3, 5]
  }
  if (amount === 9) {
    return [3, 3, 3]
  }
  if (amount === 10) {
    return [5, 5]
  }
  coins = change(amount - 3);
  coins.push(3);
  return coins
}
console.log(change(17));