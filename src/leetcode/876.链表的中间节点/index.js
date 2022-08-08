// class MyLinkedList {
//   constructor() {
//     this.Head = {
//       value: null,
//       next: null
//     };
//   }
//   getNode(index) {
//     let current = this.Head;
//     for(let i = 0; i < index; i++) {
//       if (current.next) {
//         current = current.next
//       } else {
//         return -1
//       }
//     }
//     return current
//   }
//   get(index) {
//     const node = this.getNode(index);
//     return node === -1 ? -1 : node.value
//   }
//   addAtIndex(index, val) {
//     let current = this.Head;
//     for(let i = 0; i < index; i++) {
//       current = current.next
//     }
//     current = {
//       value: val,
//       next: null
//     }
//   }
// }

class MyLinkedList {
  constructor() {
    this.head = undefined;
  }
  push(val) {
    let current;
    if (this.head === undefined) {
      this.head = {
        value: val,
      };
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = {
        value: val,
      };
    }
  }
}
var linkedList = new MyLinkedList();
window.linkedList = linkedList;

for (let i = 0; i < 4; i++) {
  linkedList.push(i);
}
console.log(linkedList);
// console.log(linkedList.get(1));

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
console.log(middleNode(linkedList.head));
