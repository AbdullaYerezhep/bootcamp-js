function round(num) {
    let flag = true
    let res = num
    let ost = num
    if (ost < 0) {
        ost = -ost
        flag = false
    }
    while (ost > 100000) {
        ost = ost - 10000
    }
    while (ost > 1) {
        ost--
    }
    if (ost > 0.5) {
        if (flag) {
            res = res +(1-ost)
        } else {
            res = res -(1-ost)
        }
    } else if (ost < 0.5) {
        if (flag) {
            res = res - ost
        } else {
            res = res + ost
        }
    } else if (ost = 0.5) {
        res = res + ost
    }
    return res
}
function floor(num) {
    let ost = num
   // let flag = false
    let res 
    if (ost < 0) {
        ost = -ost
        //flag = true
    }
    while (ost > 100000) {
        ost = ost - 10000
    }
    while (1 < ost) {
        ost--
    }
    if (num > 0) {
        res = num - ost
    } else if (num < 0) {
        res = num - (1-ost)
    } else {
        res = num
    }
    return res
}
function trunc(num) {
    let ost = num
    let res
   // let flage = false
    if (ost < 0) {
        ost = -ost
        //flage = true
    }
    while (ost > 100000) {
        ost = ost - 10000
    }
    while (1 < ost) {
        ost--
    }
    if (num > 0) {
        res = num - ost
    } else if (num < 0) {
        res = num + ost
    } else {
        res = num
    }
    return res
}
function ceil(num) {
    let ost = num
   // let flag = false
    let res 
    if (ost < 0) {
        ost = -ost
        //flag = true
    }
    while (ost > 100000) {
        ost = ost - 10000
    }
    while (1 < ost) {
        ost--
    }
    if (num > 0) {
        res = num + (1-ost)
    } else if (num < 0) {
        res = num + ost
    } else {
        res = num
    }
    return res
}