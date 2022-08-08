## step1 计算链表长度
```
let count = 0, current = head;
while(current) {
  current = current.next;
  count++
}
```
## 遍历到长度中间值
```
current = head
for (let i = 0; i < Math.floor(count / 2); i++) {
  current = current.next
}
retturn current
```
```
var middleNode = function (head) {
  let count = 0,
    current = head;
  while (current) {
    current = current.next;
    count++;
  }
  current = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    current = current.next;
  }
  return current;
};
```