export const generateLetters = () => {
    let fontsize = 11
    for (let i = 0; i<120; i++) {
        let letter = document.createElement('div')
        const alphabet = "ABCDEFGHIJKLMNOPQRSTQVWXYZ"
        letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)]
        letter.style.fontSize = fontsize + 'px'
        fontsize++
        if (i < 41) {
            letter.style.fontWeight = 300
        } else if (i < 81) {
            letter.style.fontWeight = 400
        } else {
            letter.style.fontWeight = 600
        }
        document.body.append(letter)
        

    }
}