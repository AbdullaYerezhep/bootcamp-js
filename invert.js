const revert = (o) => {
    let newO = {}
    for (key in o) {
        newO[o[key]] = key
    }
    return newO
}