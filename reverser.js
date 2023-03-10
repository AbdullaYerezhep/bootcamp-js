function reverse(str) {
    let res = ''
    let arr = []
    if (typeof str === 'string' ) {
        for (let i = str.length-1; i >= 0; --i) {
            res += str[i]
        }
        return res
    } else if (Array.isArray(str)) {
        for (let i = 0; i < str.length; i++) {
            arr[str.length-i-1] = str[i]
        }
        return arr
    }
}