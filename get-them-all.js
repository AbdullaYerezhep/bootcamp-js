export function getArchitects() {
    let architects = Array.from(document.getElementsByTagName('a'))
    let nonArchitects = Array.from(document.getElementsByTagName('span'))
    console.log(architects)
    return [architects, nonArchitects]
}

export function getClassical() {
    const classicalArchitects = Array.from(document.querySelectorAll('.classical'));
    const nonClassicalArchitects = Array.from(document.querySelectorAll(':not(.classical).baroque, :not(.classical).modern'));
    return [classicalArchitects, nonClassicalArchitects];
}

export function getActive() {
    const classicalActive = Array.from(document.querySelectorAll('.classical.active'));
    const classicalNonActive = Array.from(document.querySelectorAll('.classical:not(.active)'));
    return [classicalActive, classicalNonActive];
}

export function getBonannoPisano() {
    const architects = Array.from(document.querySelectorAll('.classical.active'));
    const bonannoPisano = document.getElementById('BonannoPisano');
    const remainingArchitects = architects.filter(architect => architect.id !== 'BonannoPisano');
    return [bonannoPisano, remainingArchitects];
}
  