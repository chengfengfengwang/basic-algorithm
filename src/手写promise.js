const FULLFILLED = 'fullfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class Promise {
  constructor (excutor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resovleCallbacks = [];
    this.rejectCallbacks = [];
    excutor(this.resolve, this.reject)
  }
  resolve = (value) => {
    this.status = FULLFILLED;
    this.value = value;
    while(this.resovleCallbacks.length) {
      this.resovleCallbacks.shift()(this.value)
    }
  }
  reject = (reason) => {
    this.status = REJECTED;
    this.reason = reason;
    while(this.rejectCallbacks.length) {
      this.rejectCallbacks.shift()(this.reason)
    }
  }
  then = (resolveCallback, rejectCallback) => {
    // resolve在构造器里被同步执行，此时构造器里的resolve()会先于.then()的执行
    if (this.status === FULLFILLED) {
      resolveCallback(this.value)
    }
    // reject在构造器里被同步执行，此时构造器里的reject()会先于.then()的执行
    if (this.status === REJECTED) {
      rejectCallback(this.reason)
    }
    // then先于构造器里的resolve/reject执行
    if (this.status === PENDING) {
      this.resovleCallbacks.push(resolveCallback);
      this.rejectCallbacks.push(rejectCallback);
    }
    
    return new Promise((resolve, reject) => {
      
    })
  }
}
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ok')
//   }, 1000);
// })
// console.log(p1)

new Promise((resolve, reject) => {
  reject('errr');
  // resolve('ok')
  // setTimeout(() => {
  //   resolve('ok')
  //   // reject('errr')
  // }, 1000);
}).then((res) => {
  console.log('success:', res);
  return 'okk'
}, (reason) => {
  console.log('fail:', reason)
})

// 1. 执行Promise类的构造器, 注意构造器里可能有异步任务
// 2. 在构造器里执行new Promise时传入类的方法
// 3. 执行then方法
// 4. 同步代码执行完成，异步任务可能执行完成或失败 这时会调用resolve/reject（api规定用户必须这么使用）
// 5. then方法后面还可以跟.then()调用，而且then里的回调和回调参数和promise实例的api一样