const  multiply = (a,b) => {
    let count = 0
    let result = 0
    while(count<b){
        result = result + a
        count++
    }
    return result
}



const divide = (a,b) => {
    let count = 0
    while(a > 1) {
        a = a-b
        count++
    }
    return count
}



const modulo = (a,b) => {
    let count = 0
    while(a > 1) {
        a = a-b
        count++
    }
    return a
}

