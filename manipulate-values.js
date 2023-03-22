function filterValues(obj, f) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        if (f(value)) {
            res[key] = value
        }
    })
    return res
}
function mapValues(obj, f) {
    //let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        obj[key] = f(value)
    })
    return obj
}
function reduceValues(obj, f, init) {
    let res = 0
    if (init) {
        res = init
    }
    Object.entries(obj).forEach((entry) => {
        //let key = entry[0];
        let value = entry[1];
        res = f(res, value)
        //console.log(res)
    })
    return res
}