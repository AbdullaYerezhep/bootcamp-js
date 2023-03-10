function chunk(arr, size) {
    let res = []
    let z = []
    for (let i = 0; i < arr.length; i++) {
        if (i == size) {
            res.push(z)
            z = []
            arr = arr.slice(i, arr.length)
            i=0
       } 
       z.push(arr[i]) 
    }
    if (arr.length <= size) {
        res.push(z) 
    }
    return res
}