function nasa(num) {
    let res = ''
    for (let i = 1; i <= num; i++ ) {
        if ( i < 3) {
            res += String(i) + ' '
        } else if (i%3 == 0 && i%5 == 0) {
            res += 'NASA '
        } else if (i%5 == 0) {
            res += 'SA '
        } else if (i%3 == 0) {
            res += 'NA '
        } else  {
            res += String(i) + ' '
        }
    }
    res = res.slice(0, -1)
    return res 
}