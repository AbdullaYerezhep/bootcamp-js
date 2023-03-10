function pyramid(str, num) {
    let res = ''
    for (let i=1; i <=num;i++) {
        res +=' '.repeat(num-i).repeat(str.length)
        res += str.repeat(i * 2 -1)
        if (i===num) {
            return res
        }
        res +='\n'
    }
    return res
}