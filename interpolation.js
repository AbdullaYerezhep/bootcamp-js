function interpolation(obj) {
    let step = 0
    let interval = setInterval(() => {
        let x = obj.start + step * (obj.end - obj.start) / obj.step
        let y = (step + 1) * obj.duration / obj.step
        obj.callback([x, y])
        step++
        if (step === obj.step) clearInterval(interval)
    }, obj.duration / obj.step)
}