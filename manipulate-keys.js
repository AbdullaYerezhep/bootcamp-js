function filterKeys(obj, f) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        if (f(key)) {
            res[key] = value
        }
    })
    return res
}
function mapKeys(obj, f) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        //key = 
        res[f(key)] = value
    })
    return res
}
function reduceKeys(obj, f, init) {
    let res = ''
    //console.log("init:", init)
    if (init || init === 0) {
        //console.log("sdf")
        res = init
    }
    //console.log("res:",res)
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        //let value = entry[1];
        if (res === '') {
            res = key
        } else {
            res = f(res, key)
        }
        //console.log(res)
    })
    return res
}