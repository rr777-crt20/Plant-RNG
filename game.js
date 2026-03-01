const sun = document.getElementById('info-sun');
const exp = document.getElementById('info-exp');
const lom = document.getElementById('info-dostup-click');
const main = document.getElementById('main-button');
const div = document.getElementById('result');
const chancee = document.getElementById('result-text');
const image = document.getElementById('img');
const efi = document.getElementById('efi')
const button_efir = document.getElementById('ToNot')
const button_sun = document.getElementById('ToSun')

let suns = 0;
let loms = 0;
let mests = 5;
let veve = 0;
let Mogno = false;
let efir = 0;


// Инициализация
sun.textContent = suns;
lom.textContent = veve;

main.onclick = ToClick;
button_efir.onclick = ToEfir;
button_sun.onclick = ToSun

function chance(probability) {
    return Math.random() < probability;
}

function startTimer( time, functions ) {
    console.log('startTimer')
    const fList = functions
    setTimeout( () => {
        fList.forEach( f => f() )
        console.log('startTimer done')
    }, time * 1000 )
}

// startTimer(2, [ToClick])

// setTimeout(ToClick, 2000)
// setTimeout(chance, 2000, 1/5)



function ToClick() {
   



    if (chance(1/3)) {
       
        chancee.classList.add('gray');
        chancee.classList.remove('green', 'blue', 'black', 'green2', 'red', 'blue2', 'lightgreen');
        chancee.textContent = "горохострел (1/3)";
        veve += 1;
        lom.textContent = veve;
        
       
        image.src = "./images/a1.png";
    }
    else if (chance(1/5)) {
        chancee.classList.add('green');
        chancee.classList.remove('blue', 'gray','black', 'green2', 'red', 'blue2', 'lightgreen');
        chancee.textContent = "двойной горохострел (1/5)";
        veve += 3;
        lom.textContent = veve;
        image.src = "./images/a2.jfif";
    }
     else if (chance(1/8)) {
        chancee.classList.add('blue');
        chancee.classList.remove('green', 'gray','black', 'green2', 'red', 'blue2', 'lightgreen');
        chancee.textContent = "ледяной горохострел (1/8)";
        veve += 5;
        lom.textContent = veve;  
        image.src = "./images/a3.jfif";
    }
    else if (chance(1/11)) {
        chancee.classList.add('red');
        chancee.classList.remove('green', 'gray','black', 'green2', 'blue', 'blue2', 'lightgreen');
        chancee.textContent = "огненный горохострел (1/11)";
        veve += 8;
        lom.textContent = veve;  
        image.src = "./images/a4.png";
    }
    else if (chance(1/14)) {
        chancee.classList.add('lightgreen');
        chancee.classList.remove('green', 'gray','black', 'green2', 'red', 'blue2', 'blue');
        chancee.textContent = "трихострел (1/14)";
        veve += 13;
        lom.textContent = veve;  
        image.src = "./images/a5.jfif";
    }
    else if (chance(1/17)) {
        chancee.classList.add('blue2');
        chancee.classList.remove('green', 'gray','black', 'green2', 'red', 'blue', 'lightgreen');
        chancee.textContent = "ледяной 2.0 горохострел (1/17)";
        veve += 18;
        lom.textContent = veve;  
        image.src = "./images/a6.webp";
    }
    else if (chance(1/20)) {
        chancee.classList.add('green2');
        chancee.classList.remove('green', 'gray','black', 'blue', 'red', 'blue2', 'lightgreen');
        chancee.textContent = "двойной 2.0 горохострел (1/20)";
        veve += 25;
        lom.textContent = veve;  
        image.src = "./images/a7.webp";
    }
    else if (chance(1/25)) {
        chancee.classList.add('black');
        chancee.classList.remove('green', 'gray','blue', 'green2', 'red', 'blue2', 'lightgreen');
        chancee.textContent = "теневой горохострел (1/25)";
        veve += 40;
        lom.textContent = veve;  
        image.src = "./images/a8.webp";
    }

   
}
function ToEfir(){
    if (veve >= 1){
        veve -= 1;
        efir += 1
    }
    efi.textContent = "ЭФИР:" + efir
    lom.textContent = veve;  
}
function ToSun(){
    if (efir >=5){
        efir -= 5
        suns += 1
    }
    sun.textContent = suns
    efi.textContent = "ЭФИР:" + efir
}


