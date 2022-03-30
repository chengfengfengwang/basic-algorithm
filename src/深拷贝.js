function deepClone(val) {
  let newVal = null;
  if (typeof val === 'object') {
    if (Array.isArray(val)) {
      newVal = [];
      val.forEach(item => {
        newVal.push(deepClone(item))
      })
    } else {
      newVal = {};
      Object.keys(val).forEach(key => {
        newVal[key] = deepClone(val[key])
      })
    }
  } else {
    newVal = val;
  }
  return newVal
}
// 1. 处理最简单的value拷贝并返回
// 2. 处理一层{}的深拷贝并且返回
// 3. 处理一层[]的深拷贝并且返回
// 4. 既然deepClone已经能够处理基本的value和一层的[]和{}, 那么对于{}和[]里的值我们不能确定他们的类型
// 有可能是嵌套的比如[[1,2],3],{type: {name: 'a'}} 那么我们都用deepClone来处理

let o = {
  fn: () =>{
    console.log('zz')
  }
}
let o1 = deepClone(o)
window.o1 = o1