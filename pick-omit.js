const pick = (object, keys) => {
    let newObject = {}
    Object.keys(object).forEach(key => {
        if (keys.includes(key)) {
            newObject[key] = object[key]
        }
    }); 
    return newObject
}
const omit = (object, keys) => {
    let newObject = {}
    Object.keys(object).forEach(key => {
        if (!keys.includes(key)) {
            newObject[key] = object[key]
        }
    }); 
    return newObject
}