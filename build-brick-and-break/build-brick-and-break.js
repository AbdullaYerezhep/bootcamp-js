export function build(numOfBricks) {
    let n = numOfBricks
    let id = 1
    let foundationBrick = 3
    let intervalId = setInterval(()=>{
        let brick = document.createElement('div')
        brick.textContent = id
        brick.id = 'brick-' + (id++)
        document.body.appendChild(brick)
        if (id === foundationBrick) {
            brick.setAttribute('foundation','true')
            foundationBrick += 3
        }
        if (id > n) {
            clearInterval(intervalId)
        }
        
    },100)
}

export function repair(...ids){
//    ids = [...ids]
   ids.forEach(id => {
        brick = document.getElementById('brick-'+id)
        if (brick.hasAttribute(foundation)) {
            brick.setAttribute('repaired','true')
        }else {
            brick.setAttribute('repaired', 'in progress')
        }
   });
}

export function destroy(){
    documents.querySelector('div:last-child').remove()
}