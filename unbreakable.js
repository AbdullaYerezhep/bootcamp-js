function split(str, r) {
    let res = str
    let arr = []
    if (r == '') {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        } 
        } else {
            for (let i = 0; i < res.length; i++) {
                if (res.slice(i,i+r.length)==r) {
                    arr.push(res.slice(0,i))
                    res = res.slice(i+r.length)
                    i = -2+1
        }
    }
    arr.push(res)
        }
     return arr
}
function join(arr, r) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (r.length == 0) {
            res += arr[i]
        } else {
        res += arr[i]+r
        }
    }
    res = res.slice(0, res.length - r.length)
    return res
}