function stringfy(val) {
  let str = '';
  if (typeof val === 'object') {
    if (Array.isArray(val)) {
      str += '[';
      val.forEach((e,index) => {
        if (index !== val.length - 1) {
          str += `${stringfy(e)},`
        } else {
          str += `${stringfy(e)}`
        }
      })
      str += ']';
    } else {
      str += '{';
      Object.keys(val).forEach((key, index) => {
        if (index !== (Object.keys(val).length - 1)) {
          str += `'${key}':${stringfy(val[key])},` // 在自己的函数里面调用自己，可以把该函数看成是处理某些功能或者返回某个值的小块代码
        } else {
          str += `'${key}':${stringfy(val[key])}`
        }
      })
      str += '}';
    }
  } else {
    if (typeof val !== 'number') {
      str += `'${val}'`
    } else {
      str += `${val}`
    }
  }
  return str
}
const obj = {name: 'w', hobbys: ['play', 2, {a: 'aa'}]}

// const obj = [1, 'a', {name: 'w', hobbys: ['play', 2, {a: 'aa'}]}]
// console.log(stringfy({name: 'w', age: 2}))
console.log(stringfy(obj))
console.log(JSON.stringify(obj))