import {styles} from './pimp-my-style.data.js'
let i = 0;
let backing = false
export const pimp = () => {
    let btn = document.querySelector('.button');
    if (backing) {
        btn.classList.remove(styles[i-1])
        i--
    } else {
        btn.classList.add(styles[i])
        i++
    }
    if (i == 15) {
        backing = true
        btn.classList.add("unpimp")
    }
    if (i == 0) {
        btn.classList.remove("unpimp")
        backing = false
    }
}