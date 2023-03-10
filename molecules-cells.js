function DNA(str) {
    let res = ''
    for (let i = 0; i < str.length;i++) {
        if (str[i]==='G') {
            res += 'C'
        } 
        if (str[i]==='C') {
            res += 'G'
        } 
        if (str[i]==='U') {
            res += 'A'
        } 
        if (str[i]==='A') {
            res += 'T'
        }
    }
    return res
}
function RNA(str) {
    let res = ''
    for (let i = 0; i < str.length;i++) {
        if (str[i]==='C') {
            res += 'G'
        } 
        if (str[i]==='G') {
            res += 'C'
        } 
         if (str[i]==='A') {
            res += 'U'
        } 
        if (str[i]==='T') {
            res += 'A'
        }
    }
    return res
}