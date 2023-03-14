const indexOf = (arr, val, start) => {
    if (start === undefined) {
        start = 0
    }
    for (var i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            return i    
        }
    }
    return -1
}
const lastIndexOf = (arr, val) => {
    for (var i = arr.length; i >= 0; i--){
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}
const includes = (arr, val) => {
    for (const e of arr) {
        if (e === val) {
            return true
        }
    }
    return false
}   

const slice = (data, startIndex, endIndex) => {
    var res = []
    if (data===undefined) {
        return res
    }
    if (endIndex === undefined) {
        endIndex = data.length
    }
    if (startIndex < 0) {
        startIndex += data.length 
    }
    if (endIndex < 0) {
        endIndex += data.length
    }
    for (var i = startIndex; i < endIndex; i++) {
        res.push(data[i])
    }
    return res.toString()
}
console.log(slice('sasd',3))