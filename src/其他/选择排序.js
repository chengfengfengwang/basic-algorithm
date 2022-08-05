const arr = [2, 3, 6, 1, 7, 8, 4, 5];
function quickSort(arr) {
    let min = null, minIndex = null;
    for(let i = 0; i < arr.length; i++) {
        min = arr[i];
        for (let k = i; k < arr.length; k++) {
            if (min > arr[k]) {
                min = arr[k],
                minIndex = k
            }
        }
        console.log(min);
        // 交换
        let temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp
    }
}

function quickSort1(arr) {
    let newArr = [];
    while (arr.length) {
        let min = arr[0], minIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                minIndex = i;
                min = arr[i]
            }
        }
        // 删除该项，并且将该项推入新数组
        newArr.push(...arr.splice(minIndex, 1))
    }
    return newArr
}
