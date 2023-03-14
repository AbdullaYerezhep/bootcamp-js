function ionOut(str) {
    let arr = []
    const reg = /(\w*)(?=tion)/g
    const resReg = str.match(reg)
    if (resReg=== null) {
        return arr
    }
    for (let i = 0; i < resReg.length;i++) {
        if (i%2 ===0) {
            resReg[i] = resReg[i] + 't'
            arr.push(resReg[i])
        }
    }
    return arr
}