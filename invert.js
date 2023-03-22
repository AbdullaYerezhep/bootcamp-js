const invert = (o) => {
    let newO = {}
    Object.keys(o).forEach(key => {
        newO[o[key]] = key
        console.log(key)
    });
    return newO
}
invert({a:2, b:3, c:4})