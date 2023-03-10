const  multiply = (a,b) => {
    let count = 0
    let result = 0
    let neg = false
    if (b < 0) {
        b = -b
        neg = true
    }
    while(count<b){
        result += a
        count++
    }
    if (neg) {
        return -result
    }
    return result
}

const divide = (a,b) => {
    let flag = false
    let count = 0
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
        flag = true
    }
    let result = a
    while (result > b) {
        result -=b
        count++
    }
    if (flag) {
        count = -count
    } 
    return count
}

const modulo = (a,b) => {
    let flag = false
    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
    }
    let res = a
    let c = b
    let count = 1
    while (b < res) {
        res = res - c
        count++
    }
    if (flag) {
        res= -res
    }
    return res
}
