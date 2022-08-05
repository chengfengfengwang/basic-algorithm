class Collection {
  constructor() {
    this.listener = {}
  }
  emit(type) {
    this.invoke(type)
  }
  on(type, handler) {
    this.listener[type] = handler
  }
  invoke(type) {
    this.listener[type]()
  }
}
const vm = new Collection();
vm.on('click', () => {
  console.log('zzz')
})
setTimeout(() => {
  vm.emit('click')
}, 2000);

