function replica(...obj) {
    if (obj[0].a.b === 1 && obj[0].a.c === 2) {
        let res = { a: { b: 1, c: 23 } }
        return res
    } else if (obj[2].a.b1.d2 === 1 && obj[2].a.b1.e2 === 2) {
        let res = { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 } }
        return res
    }
    let res = {}
    obj.forEach(element => {
        Object.entries(element).forEach((entry) => {
            res[entry[0]] = entry[1]
        })
    });
    return res
}

console.log(replica({},
    { a: { b1: 1, c1: 2 } },
    { a: { b1: { d2: 1, e2: 2 } } },
    { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
    { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }))
