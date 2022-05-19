// function fn(param) {
//     let value = param, remainder, result = [];
//     while(value !== 0) {
//         remainder = value % 2;
//         value = Math.floor(value / 2);
//         result.push(remainder)
//     }
//     return result.reverse().join('')
// }

function fn(param) {
    if (param === 0) {
        return 0
    }
    let result = [];
    function getRemainder(value) {
        if (value === 0) {
            return
        } else {
            result.push(value % 2)
            getRemainder(Math.floor(value / 2));
        }
    }
    getRemainder(param)
    return result.reverse().join('')
}

function fn1(param) {
    if (param === 0) {
        return ''
    }
    let result = '';
    function getIntApart(value) {
        if (value === 0 || result.length > 12) {
            return
        } else {
            value = value * 2;
            if (value >= 1) {
                value = value - 1;
                result += '1'
            } else  {
                result += '0'
            }
            getIntApart(value);
        }
    }
    getIntApart(param)
    return  '.' + result
}
function transforNumber(num) {
    return fn(Math.floor(num)) + fn1(num - Math.floor(num)) 
}
console.log(transforNumber(12.76));