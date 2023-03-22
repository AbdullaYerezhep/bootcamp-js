function fusion(...objs) {
    //console.log("type of:", typeof objs, "objs:", objs, "isArray", Array.isArray(objs))
    let rObj = {}
    //rObj["arr"] = []
    for (let i = 0; i < objs.length; i++) {
        Object.entries(objs[i]).forEach((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (Array.isArray(value)) {
                if (!rObj[key]) {
                    rObj[key] = []
                }
                if (!Array.isArray(rObj[key])) {
                    rObj[key] = value
                } else {
                    rObj[key] = rObj[key].concat(value)
                }
            }
            if (typeof value === 'string') {
                if (!rObj[key]) {
                    rObj[key] = ''
                }
                if (typeof rObj[key] !== 'string') {
                    rObj[key] = value
                } else {
                    if (rObj[key] === '') {
                        rObj[key] = (rObj[key] + value)
                    } else {
                        rObj[key] = (rObj[key] + ' ' + value)
                    }
                }
            }
            if (typeof value === 'number') {
                if (!rObj[key]) {
                    rObj[key] = 0
                }
                if (typeof rObj[key] !== 'number') {
                    rObj[key] = value
                } else {
                    rObj[key] = (rObj[key] + value)
                }
            }
            if (typeof value === 'object' && !Array.isArray(value)) {
                if (!rObj[key]) {
                    rObj[key] = {}
                }
                if (!(typeof value === 'object' && !Array.isArray(value))) {
                    rObj[key] = value
                } else {
                    rObj[key] = fusion(rObj[key], value)
                }
            }
        })
    }
    return rObj
}