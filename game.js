const sun = document.getElementById('info-sun')
const exp = document.getElementById('info-exp')
const lom = document.getElementById('info-dostup-click')
const main = document.getElementById('main-button')
const div = document.getElementById('result')
const chancee = document.getElementById('result-text')
const image = document.getElementById('img')


let suns = 0
let loms = 0
let mests = 5
let veve = 0

main.onclick = ToClick

function chance(probability) {
    return Math.random() < probability;
}
function ToClick(){
if (chance(1/3)){
chancee.classList.add = ('.green')
chancee.textContent = "горохострел(1/3)"
veve += 1
    lom.textContent = veve
}
if (chance(1/5)) {
chancee.textContent = "ледяной горохострел 1 (1/5)"
veve +=3
    lom.textContent = veve
}
}
