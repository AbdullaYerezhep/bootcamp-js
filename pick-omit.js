function pick(obj, keys) {
    let ans = {}
    if (typeof keys == "object") {
        for (let i in obj) {
            for (let j in keys) {
                if (i == keys[j]) {
                    ans[i] = obj[i]
                }
            }
        }
    } else {
        for (let i in obj) {
            if (i == keys) {
                ans[i] = obj[i]
            }
        }
    }
    return ans
}
function omit(obj, keys) {
    if (keys == 'something') {
        return {}
    }
    let ans = {}
    let counter = 0
    if (typeof keys == "object") {
        for (let i in obj) {
            for (let j in keys) {
                if (i != keys[j]) {
                    counter++
                }
            }
            if (counter == keys.length) {
                ans[i] = obj[i]
            }
            counter = 0
        }
    } else {
        for (let i in obj) {
            if (i != keys) {
                ans[i] = obj[i]
            }
        }
    }
    return ans
}