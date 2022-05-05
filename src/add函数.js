// 实现add函数，包括以下功能
// add(1, 2)(3, 4)
// add.valueOf() // 10
// add(2, 5)
// add.valueOf() // 17


// 解析：
// 1. 链式调用需要函数的执行结果返回一个函数
// 2. 每次调用需要把值存起来
// 3. 不用闭包也能做，修改一个全局变量count也可以

// 使用闭包
function createAdd() {
  let count = 0;
  function add(...params) {
    params.forEach(item => {
      count += item
    });
    return add
  }
  add.valueOf = () => count
  return add
}
const add = createAdd();

// 不用闭包
// let count = 0;
// function add(...params) {
//     params.forEach(item => {
//       count += item
//     });
//     return add
// }
// add.valueOf = () => count


let currentValue = 0;

add(1, 2)(3, 4)
currentValue = add.valueOf() // 10
console.log(currentValue);

add(2, 5)
currentValue = add.valueOf() // 17
console.log(currentValue);
