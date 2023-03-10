const repeat = (s, n) => {
    let count = 0
    let result = ''
    while ( count < n) {result = result + s; count++}
    return result
}