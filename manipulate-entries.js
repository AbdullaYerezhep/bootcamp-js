function filterEntries(obj, f) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        if (f([key, value])) {
            res[key] = value
        }
    })
    return res
}
function mapEntries(obj, f) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        value = f([key, value])
        //console.log("key:", key, "value:", value)
        res[value[0]] = value[1]
    })
    return res
}
function reduceEntries(obj, f, init) {
    let res = ''
    //console.log("init:", init)
    if (init || init === 0) {
        //console.log("sdf")
        res = init
    }
    //console.log("res:",res)
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        res = f(res, [key, value])
        //console.log(res)
    })
    return res
}
function lowCarbs(obj) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        if (nutritionDB[key].carbs * value / 100 < 50) {
            res[key] = value
        }
    })
    return res
}
function totalCalories(obj) {
    let res = 0
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        res = res + nutritionDB[key].calories * value / 100
    })
    return Number(Number.parseFloat(res).toFixed(1))
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
function cartTotal(obj) {
    let res = {}
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1] / 100;
        //console.log(nutritionDB[key])
        res[key] = mapValues(nutritionDB[key], (v) => Number(Number.parseFloat(v * value).toFixed(3)))
    })
    return res
}