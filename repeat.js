const repeat = (n, s) => {
    let count = 0
    let result = ""
    while ( count < n) {result = result + s; count++}
    return result
}