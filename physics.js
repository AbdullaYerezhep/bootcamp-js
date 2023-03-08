function getAcceleration(obj) {
    let a = obj.f / obj.m
    let b = obj.Δv / obj.Δt
    let c = (2 * obj.d) / (obj.t * obj.t)
    let e = "impossible"

    if (typeof(obj.f)=='number'&&typeof(obj.m)=='number') {
        return a
    }
    if (typeof(obj.Δv)=='number'&&typeof(obj.Δt)=='number') {
        return b
    }
    if (typeof(obj.d)=='number'&&typeof(obj.t)=='number') {
        return c
    }
    return e
}