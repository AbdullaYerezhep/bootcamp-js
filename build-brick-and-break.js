const builder = (id, middle) => {
    let brick = document.createElement("div");
    document.body.append(brick)
    brick.id = 'brick-' + id
    brick.innerHTML = id
    if (middle) {
        brick.dataset.foundation = true
    }
}
export const build = (amount) => {
    let i = 1;
    let countFoundation = 2
    const intervalId = setInterval(() => {
        if (i == countFoundation) builder(i, true), countFoundation += 3;
        else builder(i);
        i++;
        if (i > amount) {
            clearInterval(intervalId);
        }
    }, 100);
}
export const repair = (...ids) => {
    for (const id of ids) {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.hasAttribute('data-foundation')) {
                brick.setAttribute('data-repaired',"in progress")
            } else {
                brick.setAttribute("data-repaired","true")
            }
        }
    }
}
export const destroy = () => {
    const lastBrick = document.querySelector('div:last-child');
    lastBrick.remove()
}