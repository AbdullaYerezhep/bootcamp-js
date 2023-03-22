function deepCopy(obj) {
    if (Array.isArray(obj)) {
        let arr1 = []
        for (let i = 0; i < obj.length; i++) {
            arr1[i] = deepCopy(obj[i])
        }
        return arr1
    } else if (typeof obj === 'object') {
        if (Object.values(obj).length > 0) {
            let res = {}
            Object.entries(obj).forEach((entry) => {
                res[entry[0]] = deepCopy(entry[1])
            })
            return res
        }
        return obj
    } else {
        return obj
    }
}