const defaultCurry = (obj1) => {
    return (obj2) => {
        let res = {}
        Object.entries(obj1).forEach((entry) => {
            let key = entry[0]
            let value = entry[1]
            res[key] = value
        })
        Object.entries(obj2).forEach((entry) => {
            let key = entry[0]
            let value = entry[1]
            res[key] = value
        })
        return res
    }
}
const mapCurry = (func) => {
    return (obj) => {
        let res = {}
        Object.entries(obj).forEach((entry) => {
            let key = func(entry)[0]
            let val = func(entry)[1]
            res[key] = val
        })
        return res
    }
}
const reduceCurry = (func) => {
    return (obj, num) => {
        let res = num
        Object.entries(obj).forEach((entry) => {
            res = func(res, entry)
        })
        return res
    }
}
const filterCurry = (func) => {
    return (obj) => {
        let res = {}
        Object.entries(obj).forEach((entry) => {
            if (func(entry)) {
                res[entry[0]] = entry[1]
            }
        })
        return res
    }
}
const reduceScore = (obj, num = 0) => {
    let res = 0
    Object.entries(obj).forEach((entry) => {
        if (entry[1].isForceUser) {
            Object.entries(entry[1]).forEach((boba) => {
                if (String(boba[0]).indexOf('Score') > 0) {
                    res += boba[1]
                }
            })
        }
    })
    return res + num
}
const filterForce = (obj) => {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        if (entry[1].shootingScore >= 80 && entry[1].isForceUser) {
            res[entry[0]] = entry[1]
        }
    })
    return res
}
const mapAverage = (obj) => {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let avg = 0
        Object.entries(entry[1]).forEach((boba) => {
            if (String(boba[0]).indexOf('Score') > 0) {
                avg += boba[1]
            }
        })
        entry[1]["averageScore"] = avg / 2
        res[entry[0]] = entry[1]
    })
    return res
}
