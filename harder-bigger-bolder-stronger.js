export const generateLetters = () => {
    let j = 0;
    const weights = [300, 400, 600];
    
    for (let i = 1; i <= 120; i++) {
        let mydiv = document.createElement("div");
        document.body.append(mydiv);
        mydiv.id = i;
        mydiv.textContent = randomLetter();
        mydiv.style.fontSize = (i+10) + "px";
        mydiv.style.fontWeight = weights[j];
        if (i % 40 == 0) j++;
    }
}
const randomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}
